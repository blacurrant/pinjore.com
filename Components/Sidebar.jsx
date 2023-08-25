import React from 'react'
import { useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import Link from 'next/link'

const menuItems = [
    {id:1, label:"TouristSpots", icon: <ion-icon name="restaurant-outline"></ion-icon>, link:"/TouristSpots"},
    {id:2, label:"Temples",      icon: <ion-icon name="restaurant-outline"></ion-icon>, link:"/Temples"},
    {id:3, label:"Restaurants",  icon: <ion-icon name="restaurant-outline"></ion-icon>, link:"/Restaurants"},
    {id:4, label:"Hotels",       icon: <ion-icon name="restaurant-outline"></ion-icon>, link:"/Hotels"},
]

const Sidebar = () => {

    const [toggleCollapse, setToggleCollapse] = useState(false);

    const onMouseOver = () => {
        setToggleCollapse(!toggleCollapse);
    };

    const sidebarClasses = () => {
        return classNames(
          "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
        );
      };

  return (
    <div 
        className='h-screen'
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseOver}
    >
        <div className='flex flex-col'>
            <div className='flex items-center justify-between relative'>
                <div className='flex items-center pl-1 gap-4'>
                    {toggleCollapse && (
                        <button onClick={onMouseOver}>
                            <ion-icon name="chevron-forward-circle-outline"></ion-icon>            
                        </button>
                    )}
                </div>

            </div>
            <div className='flex flex-col items-start'>
                {menuItems.map(({icon:Icon, ...menu}) => {
                    const classes= sidebarClasses();
                    return (
                        <div key={menu.key} className={classes}>
                            <Link href={menu.link}>
                                    <div>
                                        <Icon />
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