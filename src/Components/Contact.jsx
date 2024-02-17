import React from 'react'

function Contact() {
  return (
    <div id='contacts' className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h2 className='text-gray-700 text-center font-sans'>Send Us a Message</h2>
        <p className='text-center text-gray-700 py-2 font-sans'>We're standing by</p>
        <div className='grid md:grid-cols-2'>
            <img className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]' src="https://images.unsplash.com/photo-1619583331940-53c773ed2e55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJlYWNoJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
        <form>
            <div className='grid grid-cols-2 text-black'>
                <input className='border m-2 p-2'  type="text" placeholder='First' />
                <input className='border m-2 p-2' type="text" placeholder='Last' />
                <input className='border m-2 p-2' type="email" placeholder='Email' />
                <input className='border m-2 p-2' type="tel" placeholder='Phone' />
                <input className='border col-span-2 m-2' type="text" placeholder='Address' />
                <textarea className='border col-span-2 m-2 p-2' name="" id="" cols="30" rows="10"></textarea>
                <button className='col-span-2 m-2 '>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Contact
