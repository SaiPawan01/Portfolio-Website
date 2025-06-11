import React from 'react'

// components
import Header from './components/Header'
import Footer from './components/Footer'

// pages
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutMePage from './pages/AboutMePage'

function App() {
  return (
    <>
      <Header />
      
      {/* <HomePage /> */}
      <AboutMePage />
      {/* <ProjectsPage /> */}
      <Footer />
    </>
  )
}

export default App
