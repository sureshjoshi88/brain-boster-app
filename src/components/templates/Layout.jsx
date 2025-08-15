import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../organisms/Footer'
import Navbar from '../organisms/Navbar'


const Layout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
