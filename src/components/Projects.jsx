import React from 'react'

import sampleImg from '../assets/images/sample.png'

function Projects() {
  return (
    <div className='md:w-[70%] m-auto pl-5 pr-5 mt-24'>

        <div className='flex items-center justify-between md:mb-10 mb-5'>
            <div className='flex items-center gap-5'>
                <h1 className='text-2xl md:text-4xl'>#Projects</h1>
                <hr className='md:w-[300px]  mt-3'/>
            </div>
            <a href="#">View All</a>
        </div>

        <div className='md:flex gap-3'>
            <div className='flex flex-col border mb-5'>
                <img className='w-[100%]' src={sampleImg} alt="project Img" />
                <div className='border p-3'>
                    HTML CSS React Node
                </div>
                <div className='flex flex-col gap-3 p-5 '>
                    <h4 className='text-lg font-medium'>Title</h4>
                    <p className='text-sm'>description</p>
                    <div className='flex gap-5'>
                        <button className='border p-1 pl-3 pr-3 text-sm'>Code</button>
                        <button className='border p-1 pl-3 pr-3 text-sm'>Demo</button>
                    </div>
                </div>
            </div>

             <div className='flex flex-col border mb-5'>
                <img className='w-[100%]' src={sampleImg} alt="project Img" />
                <div className='border p-3'>
                    HTML CSS React Node
                </div>
                <div className='flex flex-col gap-3 p-5 '>
                    <h4 className='text-lg font-medium'>Title</h4>
                    <p className='text-sm'>description</p>
                    <div className='flex gap-5'>
                        <button className='border p-1 pl-3 pr-3 text-sm'>Code</button>
                        <button className='border p-1 pl-3 pr-3 text-sm'>Demo</button>
                    </div>
                </div>
            </div>

             <div className='flex flex-col border mb-5'>
                <img className='w-[100%]' src={sampleImg} alt="project Img" />
                <div className='border p-3'>
                    HTML CSS React Node
                </div>
                <div className='flex flex-col gap-3 p-5 '>
                    <h4 className='text-lg font-medium'>Title</h4>
                    <p className='text-sm'>description</p>
                    <div className='flex gap-5'>
                        <button className='border p-1 pl-3 pr-3 text-sm'>Code</button>
                        <button className='border p-1 pl-3 pr-3 text-sm'>Demo</button>
                    </div>
                </div>
            </div>


            
        </div>
    </div>
  )
}

export default Projects
