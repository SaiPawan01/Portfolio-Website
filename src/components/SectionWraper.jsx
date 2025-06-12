import React from 'react'
import { NavLink } from 'react-router-dom';

function SectionWraper({title,children,viewbtn = false,path=''}) {
    
    const viewBtnStyles = viewbtn ? 'text-[#ABB2BF] hover:text-blue-300 text-sm hover:underline ' : 'hidden text-white text-sm hover:underline';


  return (
      <div className='md:w-[70%] m-auto pl-5 pr-5 mb-16 md:mt-24'>
          <div className='flex items-center justify-between mb-5'>
              <div className='flex items-center gap-5'>
                  <h1 className='text-2xl md:text-3xl text-white'><span className='text-[#C778DD]'>#</span>{title}</h1>
                  <hr className='md:w-[300px] mt-3 border-[#C778DD]' />
              </div>
              <NavLink to={path} className={viewBtnStyles}>View all &#10230;</NavLink>
          </div>
          {children}
      </div>
  )
}

export default SectionWraper
