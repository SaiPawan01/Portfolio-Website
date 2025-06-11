import React from 'react'

import { Images } from '../assets/files/assets'

function ProjectCard({project}) {
    return (
        <div className='flex flex-col border mb-5'>
            <img className='w-[100%]' src={Images.sampleImg} alt="project Img" />
            <div className='border p-3'>
                {project.tools}
            </div>
            <div className='flex flex-col gap-3 p-5 '>
                <h4 className='text-lg font-medium'>{project.title}</h4>
                <p className='text-sm'>{project.description}</p>
                <div className='flex gap-5'>
                    <a href={project.code}><button className='border p-1 pl-3 pr-3 text-sm'>Code</button></a>
                    <a href={project.demo}><button className='border p-1 pl-3 pr-3 text-sm'>Demo</button></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
