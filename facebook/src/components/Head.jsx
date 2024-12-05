import React, { useState } from 'react'

function Head() {
    var [visible,setVisible] = useState(0)
    const handleNav = ()=>{
        setVisible(prev=>(!prev))
        console.log(prev);
        
    }
  return (
    <div className='flex justify-between items-center px-2  md:px-10 py-5  shadow-lg mx-8 md:mx-16'>

        <div className='cursur-pointer` flex justify-center items-center gap-4 md:order-3 mb-1 md:hidden'>
            <div onClick={()=>{handleNav()}}>
                {
                    visible ? 
                    <i className="fi fi-rr-cross md:hidden"></i>
                    :<i className="fi fi-rs-burger-menu md:hidden" ></i>
                }
                </div>
            <div  className=''>Search</div>
        </div>
        
        <div className=' flex gap-5 items-center md:order-1'>
            <div className=''>Microsoft</div>

            <div className={'bg-red-100 md:bg-white  absolute md:static  w-full  md:w-auto   top-20 duration-1000 translate-x-0 md:translate-x-0 md:flex items-center justify-between gap-4 order-2 ' +(visible ? "left-[0%]":"left-[-100%]")}>
            <div>Microsoft 365</div>
            <div>Teams</div>
            <div>Copilot</div>
            <div>Windows</div>
            <div>Surface</div>
            <div>Xbox</div>
            <div>Support</div>
        </div>    
        </div>

        <div className='md:order-4'>
            <div className='md:flex items-center justify-between gap-4'>
                <div className='hidden md:block'>Search</div>
                <div className='text-center'>kuta profile</div>
            </div>

        </div>

       

    </div>
  )
}

export default Head