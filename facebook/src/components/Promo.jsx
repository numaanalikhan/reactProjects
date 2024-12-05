import React from 'react'

function Promo() {
  return (
    <div className='m-8 md:m-16 md:mx-auto md:flex items-center justify-center md:gap-8'>
        <div className='flex items-center gap-8 mb-4 md:gap-2'>
            <img className='w-10 h-10' src='https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365'/>
            <p className='font-bold'>Choose Your Microsoft 365</p>
        </div>

        <div className='flex items-center gap-8 mb-4 md:gap-2'>
            <img className='w-10 h-10' src='https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Xbox-Games-Consoles?wid=40&hei=40'/>
            <p className='font-bold'>Shop XBOX</p>
        </div>

        <div className='flex items-center gap-8 mb-4 md:gap-2'>
            <img className='w-10 h-10' src='https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365'/>
            <p className='font-bold'>Get Windows 11</p>
        </div>

        <div className='flex items-center gap-8 mb-4 md:gap-2'>
            <img className='w-10 h-10' src='https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Surface-Devices?wid=40&hei=40'/>
            <p className='font-bold'>Explore Surface Devices</p>
        </div>
    </div>
  )
}

export default Promo