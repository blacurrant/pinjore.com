import BigCard from '@/Components/BigCard';
import Card from '@/Components/Card'
import Image from 'next/image'
import React,{ useState } from 'react'

const About = () => {
  const [expand, setExpand] = useState(false);
  console.log("0000",expand);
  return (
    <div className='h-screen flex flex-col bg-gray-100'>
        <div className=' bg-gray-200 rounded-lg w-full py-3 my-2  flex justify-center items-center '> 
          <h1 className='text-lg md:text-2xl font-semibold md:font-bold tracking-widest uppercase'>About PINJORE</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-2 mx-2 transition-all duration-500 ease-out'>
          { expand? <BigCard/> : <Card expand={expand}/> }
          <Card />
          <Card />
          <Card />
        </div>
    </div>
  )
}

export default About