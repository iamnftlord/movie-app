import React from 'react'
import NavBar from './NavBar'
import Footer from './footer'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <NavBar />
        <div className='h-[90vh]'>
            <Outlet />
        </div>
        <Footer />
    </div>
  );
}

export default Layout