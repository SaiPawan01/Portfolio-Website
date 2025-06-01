import React from 'react'

import { Images } from '../assets/files/assets'

function ProjectCard() {
    return (
        <div className='flex flex-col border mb-5'>
            <img className='w-[100%]' src={Images.sampleImg} alt="project Img" />
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
    )
}

export default ProjectCard
