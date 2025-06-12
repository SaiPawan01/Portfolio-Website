import React from 'react'

import Projects from '../components/Projects'

import { projects } from '../assets/files/projects'


function ProjectsPage() {
  return (
    <>
      <Projects projects={projects} title="projects" /> 
      
    </>
  )
}

export default ProjectsPage
