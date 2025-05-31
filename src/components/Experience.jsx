import React from 'react'

import infosysLogo from '../assets/images/infosys-logo.webp'
import kdlLogo from '../assets/images/kdl-logo.png'

function Experience() {
  return (
    <div className='md:w-[70%] m-auto pl-5 pr-5 mt-24'>
        <div className='flex items-center justify-between md:mb-10 mb-5'>
            <div className='flex items-center gap-5'>
                <h1 className='text-2xl md:text-4xl'>#Experience</h1>
                <hr className='md:w-[300px]  mt-3'/>
            </div>
            <a href="#">View All</a>
        </div>

        <div className='md:w-[80%] flex flex-col p-1 m-auto mb-3'>
            <div className='flex items-center justify-center gap-5 border p-3'>
                <img className='w-[70px] md:w-[150px]' src={infosysLogo} alt="company-logo" />
                <div className='p-1'>
                    <h1 className='text-md md:text-xl font-medium mb-3'>AI Project Intern</h1>
                    <p className='hidden md:flex'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit laudantium accusamus reprehenderit neque, nobis beatae velit doloribus, quae corporis rerum rem magnam quos eligendi nulla praesentium molestias numquam? Repellendus, itaque.</p>
                </div>
            </div>
        </div>

        <div className='md:w-[80%] flex flex-col p-1 m-auto mb-3'>
            <div className='flex items-center justify-center gap-5 border p-3'>
                <img className='w-[70px] md:w-[150px]' src={kdlLogo} alt="company-logo" />
                <div className='p-1'>
                    <h1 className='text-md md:text-xl font-medium mb-3'>Web Dev Intern</h1>
                    <p className='hidden md:flex'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit laudantium accusamus reprehenderit neque, nobis beatae velit doloribus, quae corporis rerum rem magnam quos eligendi nulla praesentium molestias numquam? Repellendus, itaque.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
