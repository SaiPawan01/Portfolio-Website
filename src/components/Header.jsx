import React from 'react'

function Header() {
  return (
    <div className='min-h-16 flex justify-center items-center md:mb-[72px]'>
      <div className='md:w-[70%] flex place-content-between'>
        <img src="#" alt="name logo" />
        <ul className='hidden md:flex gap-5 text-xl'>
            <li><span>#</span>home</li>
            <li><span>#</span>works</li>
            <li><span>#</span>about-me</li>
            <li><span>#</span>contacts</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
