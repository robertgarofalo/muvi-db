import React from 'react'
import UserProfile from './UserProfile';
import './Sidebar.css'
import { RiMovieLine } from "react-icons/ri"; 


const Sidebar = ({ setCurrentPage }) => {

    const userMenuItems = ['My Favourites', 'Watch Later'];
    const generalMenuItems = ['Trending', 'Recommended For You', 'Genres', 'Movies', 'TV Series'];

    return (
        <div className='sidebar-container'>
            
            <div className='logo-container'>
                <RiMovieLine className='navbar-logo-icon'/>
                <h1>muvi<span className='muvi'>DB</span></h1>           
            </div>

            <UserProfile />

            <div className='sidebar-menu'>
               
                {/* User menu */}
                <div className='user-menu-items'>
                    <ul>
                        { userMenuItems.map(item => (
                            <div className='list-row'>
                                <li key={item}>{item}</li>
                                <li>0</li>
                            </div>
                        ))}
                    </ul>
                </div>

                <hr />
            

                {/* General menu items */}
                <div className='general-menu-items'>
                    <ul>
                        { generalMenuItems.map(item => (
                            <div className='list-row' onClick={() => {setCurrentPage(item)}}>
                                <li key={item}>{item}</li>
                            </div>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
