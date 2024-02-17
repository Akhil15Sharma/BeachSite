import React from 'react'
import { useState} from 'react'
import {FaFacebook,FaTwitter,FaGooglePlus,FaInstagram,FaBars} from 'react-icons/fa'

function Navbar1() {
  const[nav,setNav] = useState(false)
  const handleNav = ()=>{
    setNav(!nav)
  }
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-slate-700/80 ' >
      <ul className='hidden sm:flex px-4 font-bold font-sans'>
        <li>
          <a href="/">  Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <div className='flex justify-between '>
        <FaFacebook className='mx-6' />
        <FaTwitter className='mx-6' />
        <FaGooglePlus className='mx-6' />
        <FaInstagram className='mx-6' />
      </div>
      {/* Hamburger icons */}
      <div onClick={handleNav} className='sm:hidden z-10 '>
        <FaBars size={20} className='mr-4 cursor-pointer ' />
      </div>
      {/* Mobile Menu */}
      <div onClick={handleNav} className={nav ?'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-6 py-9 flex flex-col': 'absolute top-0 h-screen left-[-100%] ease-in duration-500  ' }>
      <ul className='h-full w-full text-center pt-12 '>
        <li className='text-2xl py-8'>
          <a href="/">  Home</a>
        </li>
        <li className='text-2xl py-8'>
          <a href="/">Gallery</a>
        </li>
        <li className='text-2xl py-8'>
          <a href="/">Deals</a>
        </li>
        <li className='text-2xl py-8'>
          <a href="/">Contacts</a>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar1
