import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// assets
import { Icons } from '../assets/files/assets'




function Header() {

  const [sidebarState,setSidebarState] = useState(false);

  function openSidebar(){
    setSidebarState(true);
  }

  function closeSidebar(){
    setSidebarState(false);
  }

  return (
    <>
    {/* Sidebar invisible by default */}
    <div className={sidebarState ? 'fixed top-0 right-0 w-[100vw] h-[100vh] bg-[#282C33] z-10 p-5 pt-0' : 'hidden fixed top-0 right-0 w-[100vw] h-[100vh] bg-[#282C33] z-10 p-8'}>
      <div className='min-h-16 flex items-center place-content-between'>
        <div>
          <a href="#" className='flex gap-3'><img className='w-4' src={Icons.rectangleIcon} alt="name logo" /><p className='text-xl font-bold md:flex text-white'>SaiPawan</p></a>
        </div>
        <div>
          <button onClick={closeSidebar}><img src={Icons.closeSidebarIcon} alt="open-icon" /></button>
        </div>
      </div>
      <ul className='flex flex-col gap-12 text-4xl text-[#ABB2BF] mt-5'>
            <li>
              <NavLink to='/' onClick={closeSidebar} className={({isActive})=> isActive ? 'text-white':''}><span className='text-[#C778DD]'>#</span>home</NavLink>
            </li>
            <li>
              <NavLink to='/about' onClick={closeSidebar} className={({isActive})=> isActive ? 'text-white':''}><span className='text-[#C778DD]'>#</span>about-me</NavLink>
            </li>
            <li>
              <NavLink to='/projects' onClick={closeSidebar} className={({isActive})=> isActive ? 'text-white':''}><span className='text-[#C778DD]'>#</span>projects</NavLink>
            </li>
            <li>
              <NavLink to='/certifications' onClick={closeSidebar} className={({isActive})=> isActive ? 'text-white':''}><span className='text-[#C778DD]'>#</span>certifications</NavLink>
            </li>
        </ul> 
    </div>


    {/* main header */}
    <div className='min-h-16 flex justify-center items-center md:mb-18'>
      <div className='hidden md:w-[70%] md:flex place-content-between'>
        <a href="#" className='flex gap-3'><img className='w-4' src={Icons.rectangleIcon} alt="name logo" /><p className='text-xl font-bold hidden md:flex text-white'>SaiPawan</p></a>
        <ul className='hidden md:flex gap-5 text-xl text-[#ABB2BF]'>
            <li>
              <NavLink to='/' className={({isActive})=> isActive ? 'text-white':''}><span className='text-[#C778DD]'>#</span>home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({isActive})=> isActive ? 'text-white':''}><span className='text-[#C778DD]'>#</span>about-me</NavLink>
            </li>
            <li>
              <NavLink to='/projects' className={({isActive})=> isActive ? 'text-white':''}><span className='text-[#C778DD]'>#</span>projects</NavLink>
            </li>
            <li>
              <NavLink to='/certifications' className={({isActive})=> isActive ? 'text-white':''}><span className='text-[#C778DD]'>#</span>certifications</NavLink>
            </li>
        </ul>        
      </div>
      
      <div className='md:hidden w-[90%] flex place-content-between'>
        <div>
          <a href="#" className='flex gap-3'><img className='w-4' src={Icons.rectangleIcon} alt="name logo" /><p className='text-xl hidden font-bold md:flex text-white'>SaiPawan</p></a>
        </div>
        <div>
          <button onClick={openSidebar} ><img src={Icons.openSidebarIcon} alt="open-icon" /></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
