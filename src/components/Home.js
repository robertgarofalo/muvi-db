import React, { useState } from 'react'
import './Home.css'
import { RiMovieLine } from "react-icons/ri";
import fire from '../firebase/fire';

const Home = ({ user, setUser }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isRegistered, setIsRegistered] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');


    // Register new user
    const registerNewUser = () => {  
       // Check fields
        if(!email && !password){
            setErrorMessage('Please enter an email address and password')
            return;
        }
        if(!email){
            setErrorMessage('Please enter an email address')
            return;
        }
        if(!password){
            setErrorMessage('Please enter a password')
            return;
        }
       
        //Authenticate
        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {

            // Signed in 
            setUser(userCredential.user);

            console.log('user signed up successfully');
            
            setErrorMessage('');
            setEmail('');
            setPassword('')
    
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode === 'auth/invalid-email'){
                setErrorMessage('The email address is invalid.')
            } else {
            setErrorMessage(errorMessage);
            }
        });

    }


    // Sign in existing user

    const signInUser = () => {
        if(!email && !password){
            setErrorMessage('Please enter an email address and password')
            return;
        }
        if(!email){
            setErrorMessage('Please enter an email address')
            return;
        }
        if(!password){
            setErrorMessage('Please enter a password')
            return;
        }

        fire.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            setUser(userCredential.user);
            console.log('user signed in')
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode === 'auth/invalid-email'){
                setErrorMessage('The email address is invalid.')
            } else {
            setErrorMessage(errorMessage);
            }
        });

    }

    return (
        <div className='home-container'>
            <div className='main-page'>

                <div className='main-page-logo'>
                    <RiMovieLine className='logo-icon'/>
                    <h1>muvi<span className='muvi'>DB</span></h1>
                </div>
                
                <div className='main-form'>
                    <input type="email" placeholder="Email address" onChange={({target}) => setEmail(target.value)} value={email}/>
                    <input type="password" placeholder="Password" onChange={({target}) => setPassword(target.value)} value={password}/>
                    <div className='error-container'>
                        <p className={`error-message ${!errorMessage ? 'invisibile' : ''}`}>{errorMessage}</p>
                    </div>
                    {isRegistered ? (
                        // LOGIN
                    <>
                        <button onClick={signInUser}>LOGIN</button>
                        <p className='forgot-password'>Forgot your password? <span>Click here</span></p>
                        <p className='sign-up-here'>Not registered? <span onClick={() => setIsRegistered(false)}>Sign up here</span></p>
                    </>
                    ) 
                    :
                    (
                        // REGISTER
                    <>
                    <button onClick={registerNewUser}>REGISTER</button>
                    <p className='sign-up-here'>Already registered? <span onClick={() => setIsRegistered(true)}>Login here</span></p>
                    </>
                    )}

                    
                </div>
            </div>
        </div>
    )

}

export default Home
