import React from 'react'
import { MdMarkEmailUnread } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaWhatsappSquare } from "react-icons/fa";


const ContactContent = () => {
    return (
        <div>
            <div className="text-white">
                <h1 className="font-semibold text-2xl md:text-4xl">Contact</h1>
                <p>Lets Connect...</p>
            </div>
            <div className='mt-4'>
                <h1 className='text-xs text-gray-400 mb-2'>Connect with me through any of these platforms.</h1>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div className='border border-gray-400 rounded-xl flex justify-start items-center p-2 gap-2 hover:scale-105 duration-200'>
                        <MdMarkEmailUnread className='text-white text-xl' />
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-gray-300 md:text-lg' >Email</h1>
                            <p className='text-gray-400'>inzamamchowdhury20@gmail.com</p>
                        </div>

                    </div>
                     <div className='border border-gray-400 rounded-xl flex justify-start items-center p-2 gap-2 hover:scale-105 duration-200'>
                        <AiFillInstagram className='text-white text-xl' />
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-gray-300' >Instagram</h1>
                            <p className='text-gray-400'>responsible_mess_</p>
                        </div>

                    </div>
                     <div className='border border-gray-400 rounded-xl flex justify-start items-center p-2 gap-2 hover:scale-105 duration-200'>
                        <RiLinkedinBoxFill className='text-white text-xl' />
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-gray-300' >LinkedIn</h1>
                            <p className='text-gray-400'>in/inzamam-chowdhury/</p>
                        </div>

                    </div>
                     <div className='border border-gray-400 rounded-xl flex justify-start items-center p-2 gap-2 hover:scale-105 duration-200'>
                        <FaWhatsappSquare  className='text-white text-xl' />
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-gray-300' >Whatsapp</h1>
                            <p className='text-gray-400'>+916909442143</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="text-white mt-4">
                <h1 className="font-semibold text-2xl md:text-4xl">Book a Call</h1>
                <p className='text-xs text-gray-400'>Schedule a call with me if you need a more in-depth conversation about anything you want!</p>
            </div>
        </div>
    )
}

export default ContactContent