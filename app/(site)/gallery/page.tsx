"use client"
import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "@/lib/motion"
import Image from "next/image"

const photos = [
  "/gallery/img1.jpeg",
  "/gallery/img2.jpeg",
  "/gallery/img3.jpeg",
  "/gallery/img4.jpeg",
  "/gallery/img5.jpeg",
  "/gallery/img6.jpeg",
  "/gallery/img7.jpeg",
  "/gallery/img8.jpeg",
  "/gallery/img9.jpeg",
  "/gallery/img10.jpeg",
]

export default function Page() {
  return (
    <motion.div className="min-h-screen w-full bg-[#0f0f0f] px-4 py-10" variants={containerVariants} initial="hidden" animate="show">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#c76419]">Gallery</h1>
            <p className="text-sm text-white/60">Frames from my photography.</p>
          </div>

          <a
            href="https://www.instagram.com/inzamam_chowdhury_/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition"
          >
            Instagram
          </a>
        </div>

        <motion.div className="columns-1 sm:columns-2 lg:columns-3 gap-4" variants={itemVariants}>
          {photos.map((src, i) => (
            <div
              key={src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
            >
              <Image
                src={src}
                alt={`Photo ${i + 1}`}
                width={1400}
                height={1800}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
