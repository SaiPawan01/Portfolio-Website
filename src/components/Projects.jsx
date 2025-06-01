import React from 'react'



// components
import SectionWraper from './SectionWraper'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <SectionWraper title="projects">
        <div className='md:flex gap-3 text-[#ABB2BF]'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </SectionWraper>
  )
}

export default Projects
