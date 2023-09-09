import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black'>
    <h1 className='text-6xl font-bold text-white '>{title}</h1>
    <p className='py-6 w-1/4 text-base text-white'>{overview}</p>
    <div className=''>
        <button className='bg-white text-black m-2 p-4 px-12 text-xl hover:bg-opacity-50 rounded-lg'>
        ▶Play</button>
        <button className='bg-gray-500 text-black m-2 p-4 px-12 text-xl hover:bg-opacity-50  rounded-lg'>More Info</button>
    </div>

   </div>
  )
}

export default VideoTitle