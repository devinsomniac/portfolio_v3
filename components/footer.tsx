import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="mt-auto py-4">
            <div className='text-gray-300 text-2xl py-2'>
                <ul className='flex gap-4 justify-center items-center'>
                    <li><a href=""><FaGithub className='hover:text-blue-500 hover:scale-110 transition-transform duration-300' /></a></li>
                    <li><a href=""><FaDiscord className='hover:text-blue-500 hover:scale-110 transition-transform duration-300'/></a></li>
                    <li><a href=""><FaLinkedin className='hover:text-blue-500 hover:scale-110 transition-transform duration-300'/></a></li>
                    <li><a href=""><FaInstagramSquare className='hover:text-blue-500 hover:scale-110 transition-transform duration-300'/></a></li>
                    <li><a href=""><FaSpotify className='hover:text-blue-500 hover:scale-110 transition-transform duration-300'/></a></li>
                    <li><a href=""><MdEmail className='hover:text-blue-500 hover:scale-110 transition-transform duration-300'/>
                    </a></li>
                </ul>
            </div>
            <p className="text-center text-white text-xs">
                © 2025 Inzamam Ul Haque Chowdhury. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer