import React from 'react'
import {AiFillPhone,AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'

function Navbar() {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <div className='flex items-center'>
      <BsChatSquareDots size={30} className='text-var[--primary-dark] mr-2' />
      <h1 className='textxl font-bold text-gray-700 '>WEEKWAY</h1>
      </div>
      <div className='flex'>
        <div className='hidden md:flex items-center px-6'>
        <AiOutlineClockCircle className='text-var[--primary-dark] mr-2'/>
        <p className='text-sm text-gray-700 '>9AM - 5AM</p>
        </div>
        <div className='hidden md:flex items-center px-6'>
        <AiFillPhone size={20} className='className=text-var[--primary-dark] mr-2'/>
        <p className='text-sm text-gray-700 '>91-7845-1235</p>
        </div>
        <button>Free Quote</button>
      </div>
    </div>
  
  )
}

export default Navbar
