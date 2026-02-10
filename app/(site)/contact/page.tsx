"use client";
import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "@/lib/motion"
import React, { useState } from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaWhatsappSquare } from "react-icons/fa";
import ResumeModal from "@/components/ResumeModal";
import { FaGithub } from 'react-icons/fa';
const Page = () => {
    const [copied, setCopied] = useState(false);

    const email = "inzamamchowdhury20@gmail.com";
    const instagram = "responsible_mess_";
    const whatsapp = "+44 7448 078857";
    const whatsappLink = "https://wa.me/447448078857";
    const linkedinLink = "https://www.linkedin.com/in/inzamam-chowdhury/";
    const instagramLink = "https://www.instagram.com/inzamam_chowdhury_/";
    const github = "https://github.com/devinsomniac";

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1400);
        } catch { }
    };
    const [resumeOpen, setResumeOpen] = useState(false)
    return (
        <motion.div className="w-full" variants={containerVariants} initial="hidden" animate="show">
            <motion.div className="text-[#c76419] mt-10" variants={itemVariants}>
                <h1 className="font-semibold text-2xl md:text-4xl">Contact</h1>
                <p className="text-white/70">Let&apos;s connect.</p>
            </motion.div>

            <motion.div className="mt-5" variants={itemVariants}>
                <h1 className="text-xs text-gray-400 mb-3">
                    Connect with me through any of these platforms.
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <a href={`mailto:${email}`} className="group block" target="_blank" rel="noreferrer">
                        <div className="border border-white/15 bg-white/5 rounded-2xl flex items-center p-4 gap-3 transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:bg-white/10">
                            <MdMarkEmailUnread className="text-white text-2xl shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <h1 className="font-bold text-gray-200 md:text-lg">Email</h1>
                                <p className="text-gray-400 truncate">{email}</p>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    copyEmail();
                                }}
                                className="ml-auto shrink-0 rounded-md bg-white px-3 py-1 text-xs font-semibold text-black hover:bg-white/90 transition"
                            >
                                {copied ? "Copied" : "Copy"}
                            </button>
                        </div>
                    </a>

                    <a href={instagramLink} className="group block" target="_blank" rel="noreferrer">
                        <div className="border border-white/15 bg-white/5 rounded-2xl flex items-center p-4 gap-3 transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:bg-white/10">
                            <AiFillInstagram className="text-white text-2xl shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <h1 className="font-bold text-gray-200 md:text-lg">Instagram</h1>
                                <p className="text-gray-400 truncate">{instagram}</p>
                            </div>
                        </div>
                    </a>

                    <a href={linkedinLink} className="group block" target="_blank" rel="noreferrer">
                        <div className="border border-white/15 bg-white/5 rounded-2xl flex items-center p-4 gap-3 transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:bg-white/10">
                            <RiLinkedinBoxFill className="text-white text-2xl shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <h1 className="font-bold text-gray-200 md:text-lg">LinkedIn</h1>
                                <p className="text-gray-400 truncate">in/inzamam-chowdhury</p>
                            </div>
                        </div>
                    </a>

                    <a href={whatsappLink} className="group block" target="_blank" rel="noreferrer">
                        <div className="border border-white/15 bg-white/5 rounded-2xl flex items-center p-4 gap-3 transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:bg-white/10">
                            <FaWhatsappSquare className="text-white text-2xl shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <h1 className="font-bold text-gray-200 md:text-lg">WhatsApp</h1>
                                <p className="text-gray-400 truncate">{whatsapp}</p>
                            </div>
                        </div>
                    </a>
                     <a href={github} className="group block" target="_blank" rel="noreferrer">
                        <div className="border border-white/15 bg-white/5 rounded-2xl flex items-center p-4 gap-3 transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:bg-white/10">
                            <FaGithub className="text-white text-2xl shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <h1 className="font-bold text-gray-200 md:text-lg">Github</h1>
                                <p className="text-gray-400 truncate">{github}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </motion.div>

            <motion.div className="text-white mt-10" variants={itemVariants}>
                <h1 className="font-semibold text-2xl md:text-4xl text-[#c76419]">
                    Opportunities
                </h1>

                <p className="text-sm text-gray-400 mt-3 max-w-xl">
                    I am currently seeking opportunities in AI, Machine Learning,
                    NLP, and Data roles — including graduate positions and
                    industrial placements. Open to UK-based roles and relocation.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                    <button
                        type="button"
                        onClick={() => setResumeOpen(true)}
                        className="rounded-md bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-white/90 transition"
                    >
                        View Resume
                    </button>

                    <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />

                    <a
                        href={`mailto:inzamamchowdhury20@gmail.com?subject=Opportunity`}
                        className="rounded-md border border-white/20 px-5 py-2 text-sm text-white hover:bg-white/10 transition"
                    >
                        Email Me
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Page;
