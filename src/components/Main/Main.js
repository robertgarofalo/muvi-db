import React from 'react'
import './Main.css';
import Sidebar from './Sidebar'

{/* 
            <Navbar />
                - Logo
            <Sidebar />
                <
                - Profile Pic
                - View Profile >

                - Menu
            <Main /> ** different pages - react router
                - search
                - carousel
            */}

const Main = () => {
    return (
        <div className='main-container'>
            <Sidebar />
        </div>
    )
}

export default Main
