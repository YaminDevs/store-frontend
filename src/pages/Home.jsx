import React from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { useState } from 'react'
import Cart from '@/components/Cart'
import Banner from '@/components/Banner'

function Home() {

const [openSearch, setOpenSearch] = useState(false)
const [openSidebar, setOpenSidebar] = useState(false)
const [openCart, setOpenCart] = useState(false)
const [gender, setGender] = useState("")
  return (
    <>
        <Navbar openSearch={openSearch} setOpenSearch={setOpenSearch} setOpenCart={setOpenCart} setOpenSidebar={setOpenSidebar} openCart={openCart} gender={gender} setGender={setGender}/>
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
        <Cart openCart={openCart} setOpenCart={setOpenCart}/>
        <Banner gender={gender} setGender={setGender}/>
    </>
  )
}

export default Home