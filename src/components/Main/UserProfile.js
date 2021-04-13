import React from 'react'
import './UserProfile.css'
import userAvatar from './images/avatar.png'

const UserProfile = () => {
    return (
        <div className='profile-container'>
            <img src={userAvatar} />
            <p>View Profile</p>
        </div>
    )
}

export default UserProfile
