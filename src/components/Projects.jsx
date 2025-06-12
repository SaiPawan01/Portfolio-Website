import React from 'react'



// components
import SectionWraper from './SectionWraper'
import ProjectCard from './ProjectCard'

// assets
import { projectsLandingPage } from '../assets/files/projects'


// isLanding prop if set true only three projects will be displayed to fit landing page
// if not set it's by defalut false and render all projects
function Projects({projects, title, isLandingPage = false, viewbtn = false, path=''}) {

  let containerStyles = 'md:flex gap-3 text-[#ABB2BF]';

  if(isLandingPage == false){
    containerStyles = 'md:grid grid-cols-3 gap-3 text-[#ABB2BF]';
  }


  return (
    <SectionWraper title={title} viewbtn={viewbtn} path={path}>
        <div className={containerStyles} >
          {/* conditional rendering of three projects or all porjects */}
            {isLandingPage ? projectsLandingPage.map((project,index) => <ProjectCard key={index} project={project}/>) :
          projects.map((project,index) => <ProjectCard key={index} project={project}/>)}
        </div>
    </SectionWraper>    
  )
}

export default Projects
