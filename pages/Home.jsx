import React from 'react'
import Image from 'next/image'
import city from '../public/citycrop.jpg'
import { PiArrowFatLinesDownFill } from 'react-icons/pi'
import HeroSlider from '@/Components/HeroSlider'

const Home = () => {
  return (
    <div className='h-screen flex flex-col bg-black'>
      <HeroSlider />
      {/* <PiArrowFatLinesDownFill className='absolute h-12 w-10 mb-5 text-sm text-white md:mb-20 animate-bounce' /> */}
    </div>
  )
}

export default Home