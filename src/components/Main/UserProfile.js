import React from 'react'
import './UserProfile.css'
import userAvatar from './images/avatar.png'
import fire from '../../firebase/fire';


const UserProfile = () => {

    let user = fire.auth().currentUser;
    let emailAddress;

    if (user != null) {
    emailAddress = user.email;
    }

    return (
        <div className='profile-container'>
            <img src={userAvatar} />
            <p>{`${emailAddress}`}</p>
        </div>
    )
}

export default UserProfile
