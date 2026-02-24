"use client"
import React, { useState } from "react"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import SpotifySection from "./SpotifySection"

const montserratBold = Montserrat({
  weight: "700",
  subsets: ["latin"],
})

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
}

const Item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const FlipCard = ({
  src,
  alt,
  wClass,
  rotateClass,
  mlClass,
  title,
  subtitle,
  meta,
  border = "border-white border-6",
}: {
  src: string
  alt: string
  wClass: string
  rotateClass: string
  mlClass?: string
  title: string
  subtitle: string
  meta: string[]
  border?: string
}) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`${mlClass ?? ""} ${wClass} ${rotateClass} relative justify-self-center`}
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      tabIndex={0}
      role="button"
      aria-label={`Photo details: ${title}`}
    >
      <motion.div
        className="relative w-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={`relative overflow-hidden rounded-2xl ${border}`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image src={src} alt={alt} width={800} height={1000} className="h-auto w-full" priority={false} />
        </div>

        <div
          className={`absolute inset-0 overflow-hidden rounded-2xl ${border} bg-[#111]`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="h-full w-full p-4 md:p-5 flex flex-col justify-between">
            <div className="space-y-2">
              <p className="text-xs text-white/50">{subtitle}</p>
              <h3 className="text-white font-semibold text-base md:text-lg">{title}</h3>
              <div className="mt-3 space-y-1">
                {meta.map((m) => (
                  <p key={m} className="text-sm text-white/70">
                    {m}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[11px] text-white/50">Hover to flip</span>
              <span className="text-[11px] text-white/60">Inzamam</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const Intro = () => {
  return (
    <motion.div className="flex flex-col gap-4 h-full justify-center" variants={container} initial="hidden" animate="show">
      <motion.div className="text-6xl md:text-8xl " variants={Item}>
        <h1 className={`${montserratBold.className} text-[#4A4A4A]`}>HELLO,</h1>
        <h2 className={`${montserratBold.className} text-[#4A4A4A]`}>
          I&apos;AM <span className="text-[#ff6e00]">INZAMAM</span>
        </h2>
      </motion.div>

      <motion.div className="text-2xl text-[#969090]" variants={Item}>
        <p>
          A curious mind weaving a journey from 🇧🇩 Bangladesh, where it all began, through an undergrad adventure in 🇮🇳
          India, and now diving into a master&apos;s challenge in 🇬🇧 the UK, while striving to become an AI engineer.
        </p>
      </motion.div>
      
      <motion.div
        className="grid grid-cols-2 md:grid-cols-2 mt-6 place-items-center gap-y-6 mr-2 md:mr-16"
        variants={Item}
      >
        <FlipCard
          src="/about_pic_1.png"
          alt="About pic 1"
          wClass="w-[180px] md:w-[320px]"
          rotateClass="-rotate-12"
          mlClass="md:ml-[100px]"
          subtitle="Winter 2023"
          title="Rohtang , Atal Tunnel , Himachal predesh, India"
          meta={["Bike Ride", "Windy and clear sky"]}
        />

        <FlipCard
          src="/about_pic_4.png"
          alt="About pic 4"
          wClass="w-[180px] md:w-[320px]"
          rotateClass="rotate-12"
          mlClass="md:ml-10"
          subtitle="Winter 2025"
          title="Cefn-coed Viaduct, Merthyr Tydfill, United Kingdom"
          meta={["Trail", "Walk", "Quick snap"]}
        />

        <FlipCard
          src="/about_pic_2.png"
          alt="About pic 2"
          wClass="w-[150px] md:w-[250px]"
          rotateClass="rotate-12"
          mlClass="md:ml-[100px]"
          subtitle="Winter 2022"
          title="Triund Top, McLeod Ganj, India"
          meta={["Cold day", "Trekking", "Minimal edits"]}
        />

        <FlipCard
          src="/about_pic_3.png"
          alt="About pic 3"
          wClass="w-[150px] md:w-[250px]"
          rotateClass="-rotate-12"
          mlClass="md:ml-12"
          subtitle="2026"
          title="Pen Y Fan"
          meta={["Candid", "Hiking", "Personal favorite"]}
        />
      </motion.div>
      {/* <motion.div className="text-2xl text-[#969090] mt-5" variants={Item}>
       <div>
        <SpotifySection/>
       </div>
      </motion.div> */}
    </motion.div>
  )
}

export default Intro
