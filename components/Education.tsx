import React from 'react'
import Image from 'next/image'
const Education = () => {
  return (
    <div>
        <div className="mt-10  w-full flex justify-center items-center gap-5 hover:scale-105 hover:transition-transform duration-300">
                        <h2 className="text-white font-semibold text-lg md:text-2xl mb-4">Timeline</h2>
                        <div className="relative border-l-2 border-gray-700">
                            <div className="ml-4">
                                <div className="flex items-center mb-6 ">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full absolute -left-3"></div>
                                    <div className="grid grid-cols-1 md:flex items-center gap-2 ml-6 hover:scale-110 hover:transition-transform duration-300">
                                        <div>
                                            <Image src={"/cardiff_logo.jpg"} alt='cardiff Logo' width={70} height={50} className='rounded-lg'/>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium text-2xl">Cardiff University</h3>
                                            <p className="text-gray-300">MSc in Advance Computer Science with placement Year</p>
                                            <p className="text-gray-400 text-sm">2025 - Now</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center mb-6">
                                    <div className="w-4 h-4 bg-green-500 rounded-full absolute -left-3"></div>
                                    <div className="grid grid-cols-1 md:flex items-center gap-2 ml-6 hover:scale-110 hover:transition-transform duration-300">
                                        <div>
                                            <Image src={"/nit_logo.png"} alt='nit logo' width={70} height={50} className='rounded-lg'/>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium text-2xl">National Institute of Technology, Kurukshetra, India</h3>
                                            <p className="text-gray-300">B.Tech in Computer Engineering</p>
                                            <p className="text-gray-400 text-sm">2020 - 2024</p>
                                            <ul className="list-disc list-inside text-gray-300 mt-1">
                                                <li>Got My Undergradute Degree</li>
                                            </ul>
                                        </div>
        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default Education