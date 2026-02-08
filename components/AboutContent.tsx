import Image from 'next/image';
import React from 'react';


const AboutContent = () => {
    return (
        <div >
           

            <div className="mt-10  w-full flex justify-center items-center gap-5 hover:scale-105 hover:transition-transform duration-300">
                <h2 className="text-white font-semibold text-lg md:text-2xl mb-4">Timeline</h2>
                <div className="relative border-l-2 border-gray-700">
                    <div className="ml-4">
                        <div className="flex items-center mb-6 ">
                            <div className="w-4 h-4 bg-blue-500 rounded-full absolute -left-3"></div>
                            <div className="grid grid-cols-1 md:flex items-center gap-2 ml-6 hover:scale-110 hover:transition-transform duration-300">
                                <div>
                                    <Image src={"/cardiff_logo.jpg"} alt='cardiff Logo' width={70} height={50} />
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
                                    <Image src={"/nit_logo.png"} alt='nit logo' width={70} height={50} />
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


             <div className="mt-10 w-full flex flex-col md:flex-row justify-center items-center gap-4 hover:scale-105 hover:transition-transform duration-300">
                <h2 className="text-white font-semibold text-xl md:text-2xl mb-4 mr-2">Projects</h2>
                <div className="">
                    <div className="ml-4">
                        <div className="flex items-center mb-6">
                            <div className="w-4 h-4 bg-blue-500 rounded-full "></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 ml-6 hover:scale-110 hover:transition-transform duration-300">
                                <div>
                                    <h3 className="text-white font-medium">XCombinatot</h3>
                                    <p className="text-gray-300">A CRUD application to list your startup idea.</p>
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div className='p-1 bg-blue-700 text-white text-xs font-bold rounded-2xl text-center'>Next JS</div>
                                    <div className='p-1 bg-sky-400 text-white text-xs font-bold rounded-2xl text-center'>TypeScript</div>
                                    <div className='p-1 bg-red-600 text-white text-xs font-bold rounded-2xl text-center'>PostGre SQL</div>
                                    <div className='p-1 bg-yellow-500 text-white text-xs font-bold rounded-2xl text-center'>Drizzle ORM</div>
                                    <div className='p-1 bg-green-500 text-white text-xs font-bold rounded-2xl text-center'>Neon DB</div>
                                    <div className='p-1 bg-violet-600 text-white text-xs font-bold rounded-2xl text-center'>Tailwind</div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mb-6">
                            <div className="w-6 h-4 bg-yellow-500 rounded-full "></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 ml-6 hover:scale-110 hover:transition-transform duration-300">
                                <div>
                                    <h3 className="text-white font-medium">Irfan Express</h3>
                                    <p className="text-gray-300">An AI powered application to generate trip itenirary for your next trip</p>
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div className='p-1 bg-blue-700 text-white text-xs font-bold rounded-2xl  text-center'>Next JS</div>
                                    <div className='p-1 bg-sky-400 text-white text-xs font-bold rounded-2xl text-center'>TypeScript</div>
                                    <div className='p-1 bg-red-600 text-white text-xs font-bold rounded-2xl text-center'>PostGre SQL</div>
                                    <div className='p-1 bg-yellow-500 text-white text-xs font-bold rounded-2xl text-center'>Drizzle ORM</div>
                                    <div className='p-1 bg-green-500 text-white text-xs font-bold rounded-2xl text-center'>Neon DB</div>
                                    <div className='p-1 bg-violet-600 text-white text-xs font-bold rounded-2xl text-center'>Tailwind</div>
                                    <div className='p-1 bg-red-950 text-white text-xs font-bold rounded-2xl text-center'>Gemini AI API</div>
                                </div>

                            </div>
                        </div>
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-4 bg-green-500 rounded-full"></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 ml-6 hover:scale-110 hover:transition-transform duration-300">
                                <div>
                                    <h3 className="text-white font-medium">Movie Mind(*Ongoing project)</h3>
                                    <p className="text-gray-300">A ML based project, to get recommendation movies based on amazon purchases and vice versa</p>
                                </div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div className='p-1 bg-blue-700 text-white text-xs font-bold rounded-2xl text-center'>Next JS</div>
                                    <div className='p-1 bg-sky-400 text-white text-xs font-bold rounded-2xl text-center'>TypeScript</div>
                                    <div className='p-1 bg-red-600 text-white text-xs font-bold rounded-2xl text-center'>Python</div>
                                    <div className='p-1 bg-yellow-500 text-white text-xs font-bold rounded-2xl text-center'>Keras</div>
                                    <div className='p-1 bg-green-500 text-white text-xs font-bold rounded-2xl text-center'>Jupyter</div>
                                    <div className='p-1 bg-violet-600 text-white text-xs font-bold rounded-2xl text-center'>G Collab</div>
                                    <div className='p-1 bg-red-950 text-white text-xs font-bold rounded-2xl text-center'>Tensorflow</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutContent;