import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Research from '@/components/Research'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col justify-start items-start mt-8'>
            <div className="text-white">
                <div>
                    <h1 className="font-semibold text-2xl md:text-4xl">About Me</h1>
                    <h2>Who am I ?</h2>
                    <Education />
                </div>

                <div className='mt-8'>
                    <h1 className="font-semibold text-2xl md:text-4xl">My Work</h1>
                    <Projects />
                </div>
                <div className='mt-8'>
                    <h1 className="font-semibold text-2xl md:text-4xl">Research & Coursework</h1>
                    <Research />
                </div>
            </div>
        </div>
    )
}

export default page