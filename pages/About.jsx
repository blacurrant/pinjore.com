import Card from '@/Components/Card'
import Image from 'next/image'
import React,{ useState } from 'react'

const About = () => {
  const [expand, setExpand] = useState(false);


  return (
    <div className='h-screen flex flex-col bg-gray-100'>
        <div className=' bg-gray-200 rounded-lg w-full py-3 my-2  flex justify-center items-center '> 
          <h1 className='text-lg md:text-2xl font-semibold md:font-bold tracking-widest uppercase'>About PINJORE</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-2 mx-2 transition-all duration-500 ease-out'>
          {/* <div onClick={()=> setExpand(true) } className={`bg-white w-[100%] md:w-[50%] h-[350px] md:h-[700px] rounded-md ${ expand ? 'w-[100%]' : 'w-[50%'}`}>
              x
          </div> */}
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
    </div>
  )
}

export default About