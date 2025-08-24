import Image from 'next/image'
import React from 'react'

const HomeContent = () => {
  return (
    <div>
         <div className="text-white">
            <h1 className="font-semibold text-2xl md:text-4xl">Hello, Inzamam Here <span className="animate-caret-blink">!</span></h1>
            <h2>A curious mind weaving a journey from 🇧🇩 Bangladesh, where it all began, through an undergrad adventure in 🇮🇳 India, and now diving into a master's challenge in 🇬🇧 the UK, while striving to become an AI engineer.</h2>
          </div>
          <div className="flex flex-col text-white max-w-[950px] py-2">
            <h2 className="text-left text-2xl py-2">Latest Medium Post:</h2>
            <div className="flex justify-center items-center">
              <a href="https://medium.com/@inzamamchowdhury20/an-introduction-to-recommender-systems-understanding-the-basics-and-types-72b8b9386fe2">
                <Image 
                  className="m-2 rounded-2xl hover:scale-110 transition-transform duration-300 w-[300px] md:w-[600px]" 
                  src="/medium1.png" 
                  alt="Medium Post" 
                  width={500} 
                  height={50} 
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start max-w-[950px] py-2 text-white">
            <h2 className="text-left text-2xl py-2">Recent Clicks:</h2>
            <div className="grid grid-cols-2">
              <div className="flex justify-center items-center">
                <Image src={'/pic_1.jpg'} className="rounded-3xl" width={250} height={50} alt="Pic_1" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Image src={'/pic_2.jpg'} className="rounded-3xl" width={250} height={50} alt="Pic_2" />
                <Image src={'/pic_3.jpg'} className="rounded-3xl" width={250} height={50} alt="Pic_3" />
                <Image src={'/pic_4.jpg'} className="rounded-3xl" width={250} height={50} alt="Pic_4" />
                <Image src={'/pic_5.jpg'} className="rounded-3xl" width={250} height={50} alt="Pic_5" />
              </div>
            </div>
          </div>
    </div>
  )
}

export default HomeContent