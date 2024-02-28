import React from 'react'
import { useState } from 'react'

function Searchfield( {openSearch}) {
    const [search, setSearch] = useState("")

  return (
    <div style={{display: openSearch ? "block" : "none"}} className='w-full'>
        <input type="text" placeholder="Search..." />
    </div>
  )
}

export default Searchfield