import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Details from './Details'
import Projects from './Projects'
import Resume from './Resume'
import Gallery from './Gallery'
const page = () => {
  return (
    <div className='w-full flex justify-center items-center p-8'>
      <Tabs defaultValue="account" className='w-full flex justify-center items-center'>
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="gallery">gallery</TabsTrigger>
          <TabsTrigger value="resume">resume</TabsTrigger>
        </TabsList>
        <TabsContent value="details"><Details/></TabsContent>
        <TabsContent value="projects"><Projects/></TabsContent>
        <TabsContent value="gallery"><Gallery/></TabsContent>
        <TabsContent value="resume"><Resume/></TabsContent>
      </Tabs>
    </div>
  )
}

export default page