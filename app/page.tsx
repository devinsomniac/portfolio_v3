"use client"

import Intro from "@/components/Intro";


export default function Home() {
  return (
    <div className="p-8 w-full md:min-w-[680px]">
      <div className="flex items-start mb-4">
        <Intro/>
      </div>
    </div>
  );
}