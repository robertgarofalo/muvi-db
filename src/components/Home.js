import React from 'react'
import './Home.css'
import { RiMovieLine } from "react-icons/ri";

const Home = () => {
    return (
        <div className='main-container'>
            <div className='main-page'>

                <div className='main-page-logo'>
                    <RiMovieLine className='logo-icon'/>
                    <h1>muvi<span className='muvi'>DB</span></h1>
                </div>
                
                <div className='main-form'>
                    <input type="email" placeholder="Email address" />
                    <input type="password" placeholder="Password" />
                    <button>LOGIN</button>
                    <p>Forgot your password? <span className='forgot-password'>Click here</span></p>
                    <p>Not registered? <span className='sign-up-here'>Sign up here</span></p>
                </div>
            </div>
        </div>
    )

}

export default Home
