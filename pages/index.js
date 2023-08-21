import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'


export default function Index() {


  return (
    <main className='h-screen'>


      {/* -- navbar -- */}

      {/* -- Hero -- */}
      <Home />

      <section className='h-screen container mx-auto flex flex-col justify-center items-center bg-gray-200'>
        aboutpinjore
      </section>



      {/* <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
              <Image className="h-8 w-12 object-cover" src={logo} alt='logo'/>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pinjore.com</span>
          </a>
          <button 
            onClick={() => { setHamburg(!hamburg)}}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">             
              <ion-icon className='h-7 w-7' name={ hamburg ? 'close-outline' : 'menu-outline'}></ion-icon>
          </button>
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul
              className= {`absolute md:static font-medium flex -mt-2 flex-col p-4 md:p-0 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${hamburg ? 'top-20 ':'top-[-490px]'}`}>
              <li>
                <a href="/Home" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Home</a>
              </li>
              <li>
                <a href="/About" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">About</a>
              </li>
              <li>
                <a href="/TouristSpots" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Tourist Spots</a>
              </li>
              <li>
                <a href="/Restaurants" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Restaurants</a>
              </li>
              <li>
                <a href="/Religious" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Religious</a>
              </li>
            </ul>
          </div>


        


        </div>
      </nav> */}
      
    </main>
  )
}
