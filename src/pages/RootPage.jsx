import React from 'react'
import { Outlet } from 'react-router-dom'

// components
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollTop'

function RootPage() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootPage
