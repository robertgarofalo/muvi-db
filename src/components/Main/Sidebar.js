import React from 'react'
import UserProfile from './UserProfile';
import './Sidebar.css'
import { RiMovieLine } from "react-icons/ri"; 


const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            
            <div className='logo-container'>
                <RiMovieLine className='navbar-logo-icon'/>
                <h1>muvi<span className='muvi'>DB</span></h1>           
            </div>

            <UserProfile />
        </div>
    )
}

export default Sidebar
