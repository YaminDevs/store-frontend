import React from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { useState } from 'react'
import Cart from '@/components/Cart'

function Home() {

const [openSearch, setOpenSearch] = useState(false)
const [openSidebar, setOpenSidebar] = useState(false)
const [openCart, setOpenCart] = useState(false)
  return (
    <>
        <Navbar openSearch={openSearch} setOpenSearch={setOpenSearch} setOpenCart={setOpenCart} setOpenSidebar={setOpenSidebar} openCart={openCart}/>
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
        <Cart openCart={openCart} setOpenCart={setOpenCart}/>
    </>
  )
}

export default Home