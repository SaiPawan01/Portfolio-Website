import React from 'react'


import Hero from '../components/Hero'
import Quote from '../components/Quote'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'


function HomePage() {
  return (
    <>
      <Hero />
      <Quote />
      <Experience />
      <Projects isLandingPage={true} viewBtn={true} />
      <Skills />
      <AboutMe isLandingPage={true} />
      <Contact />
    </>
  )
}

export default HomePage
