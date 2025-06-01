import React from 'react'

// assets 
import { Icons } from '../assets/files/assets'

function Footer() {
  return (
    <>
      <hr className='mt-12 text-[#ABB2BF]' />
      <div className='md:w-[70%] m-auto pl-5 pr-5 mt-6 mb-12'>
        <div className='md:flex justify-between mb-6'>
          <div className='flex flex-col gap-2 mb-4'>
            <div className='flex gap-2'>
              <img className='w-4' src={Icons.rectangleIcon} alt="name-logo" />
              <p className='font-bold text-white'>SaiPawan</p>
            </div>
            <p className='text-[#ABB2BF]'>B.Tech final Year Student at Anits.</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h4 className='text-xl font-medium text-white'>Media</h4>
            <div className='flex gap-2'>
              <a href="#"><img src={Icons.githubIcon} alt="github-logo" /></a>
              <a href="#"><img src={Icons.linkedinIcon} alt="linkedin-logo" /></a>
              <a href="#"><img src={Icons.discordIcon} alt="discord-logo" /></a>
            </div>
          </div>
        </div>
        <p className='text-center text-[#ABB2BF] text-[12px]'> &copy; Copyright 2025, All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer
