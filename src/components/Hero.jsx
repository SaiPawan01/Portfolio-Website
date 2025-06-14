import React from 'react'

import { Images } from '../assets/files/assets'

function Hero() {
  return (
    <div className='md:w-[70%] md:flex justify-between pl-5 pr-5 gap-5 m-auto md:mt-5 text-white'>
      <div className='md:w-[55%] flex flex-col justify-start gap-3 md:gap-5 mb-5'>
        <h2 className='text-4xl font-medium'>Hello I'm <span className='text-[#C778DD]'>Pavan</span>,</h2>
        <p className='text-sm leading-5 text-[#ABB2BF]'>Final-year Computer Science(AI & ML) student at Anil Neerukonda Institute of Technology and Sciences(ANITS), passionate about web development and machine learning.</p>
        <a href="#contact"><button className='w-[10rem] border p-2 md:mt-2 font-light border-[#C778DD] cursor-pointer hover:text-[#ABB2BF] hover:rounded'>Contact me !!</button></a>
      </div>
      <div className='flex flex-col items-center'>
        <img className='w-[25rem]' src={Images.developerImg} alt="developer-img" />
       <hr className='w-[100%] '/>
        
        <div className='border border-t-0 p-1 w-[15rem] text-[#ABB2BF] font-extralight text-sm relative before:content-[""] before:absolute before:bg-[#C778DD] before:w-3 before:h-3 before:mr-2 before:top-2'><p className='ml-5'>Preparing for placements</p></div>
      </div>
    </div>
  )
}

export default Hero
