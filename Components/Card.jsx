import React, { useState } from 'react'

const Card = (expand) => {
  console.log("0000",expand)
  return (
    <div  className={`bg-white w-[100%] md:w-[50%] h-[350px] md:h-[700px] rounded-md
     ${ expand ? 'bg-red-400' : 'bg-blue-400'}`}>
        x
    </div>
  )
}

export default Card