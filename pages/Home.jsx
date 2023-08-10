import React from 'react'
import Image from 'next/image'
import city from '../public/citycrop.jpg'
import { PiArrowFatLinesDownFill } from 'react-icons/pi'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-end'>
      <Image className='relative opacity-100 hover:opacity-70 h-[300px] md:h-screen object-cover' src={city} alt='pinjorecity' />
      <PiArrowFatLinesDownFill className='absolute h-12 w-10 mb-5 text-sm text-white md:mb-20 animate-bounce' />
    </div>
  )
}

export default Home