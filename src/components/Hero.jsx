import React from 'react'

import devImg from '../assets/images/developer-img.png'

function Hero() {
  return (
    <div className='md:w-[70%] md:flex justify-between pl-5 pr-5 gap-5 m-auto'>
      <div className='md:w-[55%] flex flex-col justify-start gap-3 md:gap-5 mb-5'>
        <h2 className='text-3xl font-bold'>Pavan is a Developer and AI&ML Enthusist.</h2>
        <p className='text-sm text-[#ABB2BF]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.lorem Fugiat nostrum ipsam optio odio nihil? Fugit, eos dignissimos, reprehenderit adipisci a voluptate vero quibusdam necessitatibus voluptatem architecto modi labore exercitationem libero! Lorem ipsum dolor sit amet consectetur adipisicing elit.lorem Fugiat nostrum ipsam optio odio nihil? Fugit, eos dignissimos, reprehenderit adipisci a voluptate vero quibusdam necessitatibus voluptatem architecto modi labore exercitationem libero!</p>
        <button className='w-[10rem] border p-2 md:mt-2 font-light'>Contact me !!</button>
      </div>
      <div className='flex flex-col items-center'>
        <img className='w-[25rem]' src={devImg} alt="developer-img" />
       <hr className='w-[100%] '/>
        <div>
          <div className='border border-t-0 p-1 w-[15rem] text-[#ABB2BF] font-extralight text-sm'>Preparing for Interviews.......</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
