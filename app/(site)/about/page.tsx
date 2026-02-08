"use client"

import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Research from '@/components/Research'
import Tech from '@/components/Tech'
import React from 'react'
import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "@/lib/motion"

const page = () => {
    return (
        <motion.div className='flex flex-col justify-start items-start mt-8'  variants={containerVariants} initial="hidden" animate="show">
            <div className="text-white">
                <motion.div variants={itemVariants}>
                    <h1 className="font-semibold text-2xl md:text-4xl text-[#c76419]">Academic Journey</h1>
                    <Education />
                </motion.div>

                <motion.div className='mt-8'variants={itemVariants}>
                    <h1 className="font-semibold text-2xl md:text-4xl text-[#c76419]">My Work</h1>
                    <Projects />
                </motion.div>
                <motion.div className='mt-8'variants={itemVariants}>
                    <h1 className="font-semibold text-2xl md:text-4xl text-[#c76419]">Research & Coursework</h1>
                    <Research />
                </motion.div>
                <motion.div className='mt-8'variants={itemVariants}>
                    <h1 className="font-semibold text-2xl md:text-4xl text-[#c76419]">Tech Stack</h1>
                    <Tech />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default page