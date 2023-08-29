import React from 'react'
import { useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import Link from 'next/link'

const menuItems = [
    {id:1, label:"TouristSpots", icon: <ion-icon name="pin"></ion-icon>, link:"/TouristSpots"},
    {id:2, label:"Temples",      icon: <ion-icon name="bandage-outline"></ion-icon>, link:"/Temples"},
    {id:3, label:"Restaurants",  icon: <ion-icon name="restaurant-outline"></ion-icon>, link:"/Restaurants"},
    {id:4, label:"Hotels",       icon: <ion-icon name="bed-outline"></ion-icon>, link:"/Hotels"},
]

const Sidebar = () => {

    const [toggleCollapse, setToggleCollapse] = useState(true);

    const onMouseOver = () => {
        setToggleCollapse(!toggleCollapse);
    };

    const router = useRouter();

    const activeMenu = useMemo(
        () => menuItems.find((menu) => menu.link === router.pathname),
        [router.pathname]
      );


    // const sidebarClasses = classNames(
    //         " flex flex-col items-center tracking-wide gap-2 py-2 px-1 md:px-2 text-xl md:text-3xl font-semibold bg-gray-100 drop-shadow-md transition-all ease-in-out duration-200",
    //         { 'md:w-[5%] w-[12%]':[!toggleCollapse],
    //           'md:w-[30%] w-[50%]':[toggleCollapse]
    //     },
    //     );

    const getNavItemClasses = (menu) => {
        return classNames(
            " border border-gray-200 drop-shadow-sm rounded-md w-[100%] py-3 md:py-5 px-2 md:px-10 hover:bg-black hover:text-gray-100",
            // {
            // ["bg-black text-gray-100"]: activeMenu.id == menu.id,
            // }
        );
        };
                        //TypeError: Cannot read properties of undefined (reading 'id')


  return (
    <div 
        className='h-screen'
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseOver}
        style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
        <div className="w-full h-screen bg-gray-100 drop-shadow-md ">
            <div className='flex items-center justify-between relative'>
                <div className=" justify-end mx-2 my-2">
                    <button className='text-2xl font-bold' onClick={onMouseOver}>
                        <ion-icon name="chevron-forward-circle-outline"></ion-icon>            
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-1 md:gap-2 px-1 items-start'>
                {menuItems.map(({...menu}) => {
                    // const classes= getNavItemClasses(menu)
                    return (
                        <div key={menu.id} className={getNavItemClasses(menu)}>
                            <Link className='flex flex-row gap-2 md:gap-4' href={menu.link}>
                                    <div className='text-lg md:text-2xl font-bold'>
                                        <h1>{menu.icon}</h1>
                                    </div>
                                    {!toggleCollapse && (
                                        <span>
                                            {menu.label}
                                        </span>
                                    )}
                            </Link>
                        </div>
                    )
                })
                }
            </div>
        </div>
    </div>
  )
}

export default Sidebar