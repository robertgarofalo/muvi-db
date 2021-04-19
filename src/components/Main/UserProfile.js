import React from 'react'
import './UserProfile.css'
import userAvatar from './images/avatar.png'
import fire from '../../firebase/fire';


const UserProfile = ({ setUser }) => {
   
    let user = fire.auth().currentUser;
    let emailAddress;

    const logOutHandler = () => {
    
        // user = null;
        fire.auth().signOut().then(() => {
            setUser(false);
        }).catch((error) => {
            console.log('error logging out - ', error);
        })
    }

    

    if (user != null) {
    emailAddress = user.email;
    } else {
        emailAddress = 'Welcome';
    }

    return (
        <div className='profile-container'>
            <img src={userAvatar} />
            <p>{`${emailAddress}`}</p>
            <button className='logout-button' 
            onClick={() => logOutHandler()}> Logout</button>
        </div>
    )
}

export default UserProfile
