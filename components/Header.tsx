import React from 'react'
import { House } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { ToolCase } from 'lucide-react';
import { Send } from 'lucide-react';

const Header = () => {
  return (
    <div className='bg-[#181818] flex flex-row gap-12 justify-center items-center pt-2 pl-4 pb-2 pr-4 mt-4 rounded-2xl max-w-[900px]'>
        <div>
            <a href="/"><House className='text-white' /></a>
        </div>
        <div>
            <a href="/about"><CircleUserRound className='text-white'/></a>
        </div>
        <div>
            <a href="/tech"><ToolCase className='text-white' /></a>
        </div>
        <div>
            <Send className='text-white'/>
        </div>
    </div>
  )
}

export default Header