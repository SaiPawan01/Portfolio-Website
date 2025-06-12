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
                    <p className='hidden md:flex text-[#ABB2BF]'>A virtual internship from December 2024 to Feburary 2024. During the period I worked on Automatic Number Plate Recognition(ANPR) and Automated Traffic Counter and Classifier(ATCC) project.This experience enhanced my understanding of computer vision, machine learning, and smart traffic management systems.</p>
                </div>
            </div>
        </div>

        <div className='md:w-[80%] flex flex-col p-1 m-auto mb-3'>
            <div className='flex items-center justify-center gap-5 border p-3 border-[#ABB2BF]'>
                <img className='w-[60px] md:w-[100px]' src={Images.kdlLogo} alt="company-logo" />
                <div className='p-1'>
                    <h1 className='text-md md:text-xl font-medium mb-3 text-white'>Web Dev Intern</h1>
                    <p className='hidden md:flex text-[#ABB2BF]'>A short-term onsite internship in Visakhapatnam at the end of my second year, where I was introduced to the core concepts of web development. During this period, I developed a strong foundation in HTML, CSS, JavaScript.</p>
                </div>
            </div>
        </div>
    </SectionWraper>
  )
}

export default Experience
