import React from 'react'

function Gallery() {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16' > 
    <h2 className='text-center text-gray-700 p-4 font-sans '>Gallery</h2>
    <div className='grid sm:grid-cols-5 gap-4 '>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1625505826533-5c80aca7d157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" alt="/" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1611043714658-af3e56bc5299?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNoJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" alt="/" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" alt="/" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1680994646592-a0161e940e87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" alt="/" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1681255761208-fd57c6eca259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJlYWNoJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" alt="/" />
        </div>
    </div>
      
    </div>
  )
}

export default Gallery
