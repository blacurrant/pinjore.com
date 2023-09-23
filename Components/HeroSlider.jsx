import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import pinjore from '../public/pinjoregarden.jpeg'
import Image from 'next/image';

function HeroSlider() {
  const slides = [
    {
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/27/cb/dd/pinjore.jpg?w=500&h=-1&s=1',
    },
    {
      url: 'https://imgs.search.brave.com/6dJS1dgaRmkCzKO9ioQNYmSoqQiz3RzLJxo7C8s8MiI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzQ5L01pZ3JhdG9y/eV9iaXJkc19hdF9L/YXVzaGFseWFfZGFt/LF9QaW5qb3IsX0hh/cnlhbmEsX0luZGlh/LkpQRw',
    },
    {
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/16/b7/d4/img-20180525-wa0009-largejpg.jpg?w=500&h=-1&s=1',
    },

    {
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/19/a8/ef/5f/propertybuilding.jpg?w=500&h=400&s=1',
    },
    {
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/48/8d/3a/pinjore-yadavindra-gardens.jpg?w=1200&h=-1&s=1',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[500px] w-full m-auto px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-[500px] rounded-2xl bg-center bg-cover transition-all ease-in-out duration-500'
      >
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white text-black cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white text-black cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer text-white'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSlider