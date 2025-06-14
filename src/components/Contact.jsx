import React from 'react'


// assets
import { Icons } from '../assets/files/assets'

// components
import SectionWraper from './SectionWraper'

function Contact() {
  return (
    <SectionWraper title='contacts'>
      <div className='md:flex md:w-[80%] justify-between m-auto' id='contact'>

        <div className='md:w-[60%] mb-3 text-[#ABB2BF]'>I’m interested in internship opportunities and full time roles. However, if you have any other queries, contact me.</div>

        <div className='flex flex-col gap-2 border p-2 border-[#ABB2BF]'>
          <h1 className='text-md font-bold text-white'>Message me here</h1>
          <div className='flex gap-2 items-center'>
            <img className='w-8' src={Icons.linkedinIcon} alt="email-icon" />
            <a href="https://www.linkedin.com/in/pavan-sai-porapu/" className='text-[#ABB2BF] hover:text-blue-300 hover:underline' target="_blank">LinkedIn</a>
          </div>
          <div className='flex gap-2 items-center'>
            <img className='w-8' src={Icons.discordIcon} alt="email-icon" />
            <a href="#" className='text-[#ABB2BF] hover:text-blue-300 hover:underline' target="_blank">Discord</a>
          </div>
        </div>
      </div>
    </SectionWraper>
  )
}

export default Contact
