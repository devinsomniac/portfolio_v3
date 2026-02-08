import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Research from '@/components/Research'
import Tech from '@/components/Tech'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col justify-start items-start mt-8'>
            <div className="text-white">
                <div>
                    <h1 className="font-semibold text-2xl md:text-4xl text-[#c76419]">Academic Journey</h1>
                    <Education />
                </div>

                <div className='mt-8'>
                    <h1 className="font-semibold text-2xl md:text-4xl text-[#c76419]">My Work</h1>
                    <Projects />
                </div>
                <div className='mt-8'>
                    <h1 className="font-semibold text-2xl md:text-4xl text-[#c76419]">Research & Coursework</h1>
                    <Research />
                </div>
                <div className='mt-8'>
                    <h1 className="font-semibold text-2xl md:text-4xl text-[#c76419]">Tech Stack</h1>
                    <Tech />
                </div>
            </div>
        </div>
    )
}

export default page