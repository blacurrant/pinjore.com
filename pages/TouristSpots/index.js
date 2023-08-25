import React from 'react'
import Sidebar from '@/Components/Sidebar'

const index = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-primary flex-1 p-4 text-white">
          {children}
      </div>
    </div>
  )
}

export default index




// import React from 'react';
// import Link from 'next/link';
// import { useState } from 'react';
// import classNames from 'classnames';

// const TouristSpots = () => {

//   const [sidebarCollapse, setSidebarCollapse] = useState(false)

//   const wrapperClass = classNames("border border-gray-200 drop-shadow-sm rounded-md w-[100%] py-5 md:py-10 px-2 md:px-10",
//    {
//     ['px-1 md:px-2']: sidebarCollapse,
//     ['md:px-10']: !sidebarCollapse
//   }
//    );


//   return (
//       <div className='flex flex-row h-screen w-full'>
//         <div className={`w-[30%] static flex flex-col items-center tracking-wide gap-2 py-2 px-1 md:px-2 text-xl md:text-3xl font-semibold bg-gray-100 drop-shadow-md transition-all ease-in-out duration-200 ${ sidebarCollapse ? 'md:w-[5%] w-[13%]': 'md:w-[30%] w-[50%]'}`}>
//             <div className='flex flex-row w-[100%] justify-end px-2 py-5'>
//                <button type='button' className='w-[100%] justify-end animate-pulse' onClick={()=>{setSidebarCollapse(!sidebarCollapse)}}>{sidebarCollapse? <ion-icon name="grid"></ion-icon>:<ion-icon name="close"></ion-icon>}</button>
//             </div>
//             <Link onClick={()=>{setSidebarCollapse(!sidebarCollapse)}} className={wrapperClass} href='#z'>{sidebarCollapse? <ion-icon name="location"></ion-icon>:'TouristSpots'}</Link>
//             <Link onClick={()=>{setSidebarCollapse(!sidebarCollapse)}} className={wrapperClass} href='#y'>{sidebarCollapse? <ion-icon name="notifications-off"></ion-icon>:'Temples'}</Link>
//             <Link onClick={()=>{setSidebarCollapse(!sidebarCollapse)}} className={wrapperClass} href='#x'>{sidebarCollapse? <ion-icon name="restaurant"></ion-icon>:'Restaurants'}</Link>
//             <Link onClick={()=>{setSidebarCollapse(!sidebarCollapse)}} className={wrapperClass} href='#Hotels'>{sidebarCollapse? <ion-icon name="bed"></ion-icon>:'Hotels'}</Link>
//         </div>
//         <div className='justify-center items-center'>
//           <h1>loading..</h1>
//         </div>
//       </div>
//   )
// }

// export default TouristSpots