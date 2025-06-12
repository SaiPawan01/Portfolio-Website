import React from 'react'


import Hero from '../components/Hero'
import Quote from '../components/Quote'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'


// assets
import {projectsLandingPage} from '../assets/files/projects.js'

function HomePage() {
  return (
    <>
      <Hero />
      <Quote />
      <Experience />
      <Projects isLandingPage={true} viewbtn={true} projects={projectsLandingPage} path='/projects' title='projects' />
      <Skills />
      <AboutMe isLandingPage={true} />
      <Contact />
    </>
  )
}

export default HomePage
