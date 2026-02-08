"use client"
import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import { motion,type Variants } from "framer-motion";
const montserratBold = Montserrat({
    weight: '700',
    subsets: ['latin']
})

const container : Variants = {
    hidden : {},
    show : {
        transition:{
            staggerChildren:0.18,
            delayChildren : 0.1
        }
    }
}

const Item : Variants = {
    hidden : {opacity : 0 ,y : 18},
    show : {
        opacity : 1,
        y : 0,
        transition:{
            duration : 0.5,
            ease: [0.16, 1, 0.3, 1],
        }
    }
}
const Intro = () => {
    return (
        <motion.div className='flex flex-col gap-4 h-full justify-center' variants={container} initial="hidden" animate="show">
            <motion.div className='text-6xl md:text-8xl' variants={Item}>
                <h1 className={`${montserratBold.className} text-[#4A4A4A]`} >HELLO,</h1>
                <h2 className={`${montserratBold.className} text-[#4A4A4A]`}>I&apos;AM <span className='text-[#ff6e00]'>INZAMAM</span></h2>
            </motion.div>
            <motion.div className='text-2xl text-[#969090]' variants={Item}>
                <p>A curious mind weaving a journey from 🇧🇩 Bangladesh, where it all began, through an undergrad adventure in 🇮🇳 India, and now diving into a master&apos;s challenge in 🇬🇧 the UK, while striving to become an AI engineer.</p>
            </motion.div>
            <motion.div className='grid grid-cols-2 md:grid-cols-2 mt-6 justify-center items-center' variants={Item}>
                <Image src={"/about_pic_1.png"} alt='About pic 1' width={300} height={400} className='md:ml-[100px] rounded-2xl -rotate-12 w-[200px] md:w-[320px] border-white border-8' />
                <Image src={"/about_pic_4.png"} alt='About pic 4' width={300} height={400} className='md:ml-10 rounded-2xl rotate-12 w-[200px] md:w-[320px] border-white border-8' />
                <Image src={"/about_pic_2.png"} alt='About pic 2' width={300} height={400} className='md:ml-[100px] rounded-2xl rotate-12 w-[200px] md:w-[290px] border-white border-8' />
                <Image src={"/about_pic_3.png"} alt='About pic 3' width={300} height={400} className='md:ml-12 rounded-2xl -rotate-12 w-[200px] md:w-[290px] border-white border-8' />
                
            </motion.div>
        </motion.div>
    )
}

export default Intro