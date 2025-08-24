"use client"
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IoMdFlashlight } from "react-icons/io";
import HomeContent from "@/components/home";
import AboutContent from "@/components/AboutContent";
import ContactContent from "@/components/ContactContent";

export default function Home() {
  return (
    <div className="p-8 w-full md:min-w-[680px]">
      <div className="flex items-start mb-4">
        <div>
          <a href="/"><Image src="/logo.png" alt="Logo" width={40} height={40} /></a>
        </div>

        <div className=" w-full">
          <Tabs defaultValue="home" className="flex justify-center items-center max-w-[950px]">
            <TabsList>
              <TabsTrigger value="home" className="text-white data-[state=active]:bg-[#232223] data-[state=active]:text-white hover:bg-gray-700">Home</TabsTrigger>
              <TabsTrigger value="about" className="text-white data-[state=active]:bg-[#232223] data-[state=active]:text-white hover:bg-gray-700">About</TabsTrigger>
              <TabsTrigger value="contact" className="text-white data-[state=active]:bg-[#232223] data-[state=active]:text-white hover:bg-gray-700">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="home" className="mt-4">
              <HomeContent />
            </TabsContent>

            <TabsContent value="about" className="mt-4">
              <AboutContent />
            </TabsContent>

            <TabsContent value="contact" className="mt-4">
              <ContactContent />
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <IoMdFlashlight className="text-[20px] text-white" aria-label="Flashlight Icon" />
        </div>
      </div>
    </div>
  );
}