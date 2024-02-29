import React from 'react'
import { useState } from 'react'

function Searchfield( {openSearch, setOpenSearch}) {
    const [search, setSearch] = useState("")

  return (
    <div style={{display: openSearch ? "flex" : "none"}} className='w-full px-4'>
        <input type="text" placeholder="Search..." className='w-[90vw] p-2 outline-none'/>
        <svg onClick={() => setOpenSearch(!openSearch)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" className='cursor-pointer p-2'>
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
        </svg>
    </div>
  )
}

export default Searchfield