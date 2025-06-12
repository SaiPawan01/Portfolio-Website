import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


// pages
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutMePage from './pages/AboutMePage'
import RootPage from './pages/RootPage'
import CertificationsPage from './pages/CertificationsPage'


// routes
const router = createBrowserRouter([
  {
    path:'/',
    element : <RootPage />,
    children :[
      {path : '/', element : <HomePage />},
      {path : '/about', element : <AboutMePage />},
      {path : '/projects', element : <ProjectsPage />},
      {path : '/certifications', element : <CertificationsPage />}
    ]
  },
  
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
