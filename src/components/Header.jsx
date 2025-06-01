import React from 'react'

// assets
import { Icons } from '../assets/files/assets'

function Header() {
  return (
    <div className='min-h-16 flex justify-center items-center md:mb-18'>
      <div className='md:w-[70%] flex place-content-between'>
        <a href="#" className='flex gap-3'><img className='w-4' src={Icons.rectangleIcon} alt="name logo" /><p className='text-xl font-bold hidden md:flex text-white'>SaiPawan</p></a>
        <ul className='hidden md:flex gap-5 text-xl text-[#ABB2BF]'>
            <li><span className='text-[#C778DD]'>#</span>home</li>
            <li><span className='text-[#C778DD]'>#</span>Projects</li>
            <li><span className='text-[#C778DD]'>#</span>about-me</li>
            <li><span className='text-[#C778DD]'>#</span>contacts</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
