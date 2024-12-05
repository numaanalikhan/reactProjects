import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col-reverse  items-center md:flex-row  bg-[#e6e6e6] m-8 md:m-16 rounded-md'>

        <div className='space-y-4  px-4 md:px-12 my-8 md:my-0'>
            <p className='w-[62px] h-[32px]  text-center bg-yellow-500 text-black font-bold'>New</p>
            <h1 className=' font-bold'>Meet Surface Laptop</h1>
           <p>
            This laptop's unrivalled flexibility and AI features like Live Captions and Cocreator, enable you to do more than you ever imagined.
            </p>
            <button className='bg-blue-700 w-[102px] h-[42px] rounded-lg font-bold text-white'>Learn More</button>
        </div>

        <div>
            <img className="rounded-md "src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-AI-11Ed-Sapphire-MC001-3000x1682:VP2-859x540'/>
        </div>
    </div>
  )
}

export default Hero