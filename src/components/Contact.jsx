import React from 'react'

import emailIcon from '../assets/icons/Email.svg'
import linkeninIcon from '../assets/icons/Linkedin.svg'

function Contact() {
  return (
    <div className='md:w-[70%] m-auto pl-5 pr-5 mt-24 mb-24'>
        <div className='flex items-center justify-between md:mb-10 mb-5'>
            <div className='flex items-center gap-5'>
                <h1 className='text-2xl md:text-4xl'>#Contacts</h1>
                <hr className='md:w-[300px]  mt-3'/>
            </div>
        </div>

        <div className='md:flex md:w-[80%] justify-between m-auto'>

          <div className='mb-3'>I’m interested in internship opportunities. However, if you have other question, contact me</div>

          <div className='flex flex-col gap-2 border p-2'>
            <h1 className='text-md font-bold'>Message me here</h1>
            <div className='flex gap-2 items-center'>
                <img src={linkeninIcon} alt="email-icon" />
                <a href="#">LinkedIn</a>
            </div>
            <div className='flex gap-2 items-center'>
                <img src={emailIcon} alt="email-icon" />
                <a href="#">Email</a>
            </div>
          </div>
        </div>        
    </div>
  )
}

export default Contact
