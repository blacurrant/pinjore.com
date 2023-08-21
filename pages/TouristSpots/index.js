import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@mui/material';

const TouristSpots = () => {

  const [sidebarCollapse, setSidebarCollapse] = useState(false)


  return (
      <div className='flex flex-row h-screen w-full'>
        <div className={`w-[30%] static flex flex-col  items-center gap-2 py-2 px-2 text-3xl font-semibold bg-gray-100 drop-shadow-md transition-all ease-in-out duration-200 ${ sidebarCollapse ? 'w-[5%]': 'w-[30%]'}`}>
            <div className='flex flex-row justify-end'>
               <button type='button' onClick={()=>{setSidebarCollapse(!sidebarCollapse)}}>X</button>
            </div>
            <Link className='' href='#z'>{sidebarCollapse? 'TS':'TouristSpots'}</Link>
            <Link className='' href='#y'>{sidebarCollapse? 'T':'Temples'}</Link>
            <Link className='' href='#x'>{sidebarCollapse? 'R':'Restaurants'}</Link>
            <Link className='' href='#Hotels'>{sidebarCollapse? 'H':'Hotels'}</Link>
        </div>
        <div className='justify-center items-center'>
          loading..
        </div>
      </div>
  )
}

export default TouristSpots