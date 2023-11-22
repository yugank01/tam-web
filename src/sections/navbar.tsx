import React from 'react'

export default function Navbar() {
  return (
    <div className='fixed flex items-center justify-center w-full my-4 z-10'>
        <div className='flex items-center justify-between px-2 w-[40%] bg-[#1D1D1D] shadow-lg shadow-[#1D1D1D]/50 rounded-[1rem] h-[40px]'>
            <div className='flex items-center justify-center text-[1.25rem] gap-4 text-[#7F7F7F]'>
                img
                <a href="">Manifesto</a>
                <a href="">Careers</a>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <button className='bg-transparent border-[#4E4E4E] border text-white h-[30px] px-4 rounded-[1rem]'>Sign In</button>
                <button className='bg-white h-[30px] px-4 rounded-[1rem] shadow-lg hover:shadow-white/30 font-semibold text-black'>Join Waitlist</button>
            </div>
        </div>
    </div>
  )
}
