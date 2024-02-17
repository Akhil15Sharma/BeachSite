import React from 'react'



function Hero() {
  return (
    <div className='w-full h-[90vh]'>
      <img  src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="/" className='w-full h-full object-cover' />
      <div className='max-w-[1140px] m-auto '>
        <div className='absolute top-[40%] w-full md:[50%] max-w-[600px] h-full flex flex-col text-white p-4 font-sans '>
        <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
        <h2 className='text-4xl italic py-4'>With Weekway</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint nesciunt reprehenderit porro est! Placeat, autem eum? Possimus nihil laboriosam nesciunt quae quidem quisquam recusandae quis ullam aliquam modi, excepturi aperiam odit nemo quaerat vitae accusantium. Ipsum nisi ab cupiditate omnis aliquam veniam, voluptatem in, vitae sapiente corporis aut dolorem!</p>
      </div>
      </div>
    </div>
    
  )
}

export default Hero
