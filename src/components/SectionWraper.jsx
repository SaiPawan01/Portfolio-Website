import React from 'react'

function SectionWraper(props) {
  return (
      <div className='md:w-[70%] m-auto pl-5 pr-5 mt-24'>
          <div className='flex items-center justify-between md:mb-10 mb-5'>
              <div className='flex items-center gap-5'>
                  <h1 className='text-2xl md:text-3xl text-white'><span className='text-[#C778DD]'>#</span>{props.title}</h1>
                  <hr className='md:w-[300px] mt-3 border-[#C778DD]' />
              </div>
              <a href="#" className='text-white text-sm hover:underline]'>View all &#10230;</a>
          </div>
          {props.children}
      </div>
  )
}

export default SectionWraper
