import React from 'react'



function ProjectCard({project}) {
    return (
        <div className='flex flex-col border mb-5 hover:scale-101'>
            <img className='w-[100%]' src={project.img} alt="project Img" />
            <div className='border p-3'>
                {project.tools}
            </div>
            <div className='flex flex-col gap-3 p-5 '>
                <h4 className='text-white text-lg font-medium'>{project.title}</h4>
                <p className='text-sm'>{project.description}</p>
                <div className='flex gap-5'>
                    <a href={project.code} target='_blank'><button className='border border-[#ABB2BF] p-1 pl-3 pr-3 text-white text-sm cursor-pointer hover:rounded hover:text-[#ABB2BF]'>Code</button></a>
                    <a href={project.demo} target='_blank'><button className='border border-[#ABB2BF] p-1 pl-3 pr-3 text-white text-sm cursor-pointer hover:rounded hover:text-[#ABB2BF]'>Demo</button></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
