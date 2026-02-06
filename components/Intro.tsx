import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
const montserratBold = Montserrat({
    weight: '700',
    subsets: ['latin']
})
const Intro = () => {
    return (
        <div className='flex flex-col gap-4 h-full justify-center'>
            <div className='text-6xl md:text-8xl'>
                <h1 className={`${montserratBold.className} text-[#4A4A4A]`} >HELLO,</h1>
                <h2 className={`${montserratBold.className} text-[#4A4A4A]`}>I'AM <span className='text-white'>INZAMAM</span></h2>
            </div>
            <div className='text-2xl text-[#969090]'>
                <p>A curious mind weaving a journey from 🇧🇩 Bangladesh, where it all began, through an undergrad adventure in 🇮🇳 India, and now diving into a master's challenge in 🇬🇧 the UK, while striving to become an AI engineer.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-2 mt-6 justify-center items-center'>
                <Image src={"/about_pic_1.png"} alt='About pic 1' width={300} height={400} className='rounded-2xl -rotate-12 w-[200px] md:w-[320px] shrink-0' />
                <Image src={"/about_pic_4.png"} alt='About pic 4' width={300} height={400} className='rounded-2xl rotate-12 w-[200px] md:w-[320px] shrink-0' />
                <Image src={"/about_pic_2.png"} alt='About pic 2' width={300} height={400} className='rounded-2xl rotate-12 w-[200px] md:w-[320px] shrink-0' />
                <Image src={"/about_pic_3.png"} alt='About pic 3' width={300} height={400} className='rounded-2xl -rotate-12 w-[200px] md:w-[320px] shrink-0' />
                
            </div>
        </div>
    )
}

export default Intro