import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const dropdown = () => {

const [dropdown, setDropdown] = useState(false)

  return (
    <div>
        <h1>MajorSpots</h1>
        <div>
            <Link>TouristSpots</Link>
            <Link>Temples</Link>
            <Link>Restaurants</Link>
            <Link>Hotels</Link>
        </div>
    </div>
  )
}

export default dropdown