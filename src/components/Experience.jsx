import React from 'react'

// assets
import {Images} from '../assets/files/assets'

//components
import SectionWraper from './SectionWraper'



function Experience() {
  return (
    <SectionWraper title='experience'>
        <div className='md:w-[80%] flex flex-col p-1 m-auto mb-3 '>
            <div className='flex items-center justify-center gap-5 border p-3 border-[#ABB2BF]'>
                <img className='w-[60px] md:w-[100px]' src={Images.infosysLogo} alt="company-logo" />
                <div className='p-1'>
                    <h1 className='text-md md:text-xl font-medium mb-3 text-white'>AI Project Intern</h1>
                    <p className='hidden md:flex text-[#ABB2BF]'>Lorem  laudantius, quae corporis rerum rem magnam quos eligendi nulla praesentium molestias numquam? Repellendus, itaque.</p>
                </div>
            </div>
        </div>

        <div className='md:w-[80%] flex flex-col p-1 m-auto mb-3'>
            <div className='flex items-center justify-center gap-5 border p-3 border-[#ABB2BF]'>
                <img className='w-[60px] md:w-[100px]' src={Images.kdlLogo} alt="company-logo" />
                <div className='p-1'>
                    <h1 className='text-md md:text-xl font-medium mb-3 text-white'>Web Dev Intern</h1>
                    <p className='hidden md:flex text-[#ABB2BF]'>Lorem ipsum dolor siribus, quae corporis rerum rem magnam quos eligendi nulla praesentium molestias numquam? Repellendus, itaque.</p>
                </div>
            </div>
        </div>
    </SectionWraper>
  )
}

export default Experience
