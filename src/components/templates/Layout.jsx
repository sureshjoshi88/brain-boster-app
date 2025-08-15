import React from 'react'
import Navbar from '../organisms/Navbar'
import { Outlet } from 'react-router'
import Footer from '../organisms/Footer'

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
    <Footer/>
      </footer>
    </div>
  )
}

export default Layout
