import React from 'react'

function Sidebar({openSidebar, setOpenSidebar}) {
  return (
    <div
        className={`transition-transform ease-linear delay-0 duration-500 transform ${
          openSidebar ? '-translate-x-0' : '-translate-x-full'
        } w-full h-full fixed top-0 left-0 p-4 z-10 bg-white `}
      > 
        <svg onClick={() => setOpenSidebar(!openSidebar)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 50 50" className='float-right cursor-pointer'>
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
        </svg>
    </div>
  )
}

export default Sidebar