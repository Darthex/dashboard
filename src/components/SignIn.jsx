import React from "react";
import {useNavigate} from "react-router-dom";
import {signInWithPopup} from 'firebase/auth'

import {auth, provider} from "../utils/firebaseConfig.js";
import google from '../assets/search.png'
import apple from '../assets/apple.png'

export default function SignIn() {

    const navigate = useNavigate()

    function handleGoogle() {
        signInWithPopup(auth, provider)
            .then(() => {
                navigate("/")
            })
    }

    return (
        <div className='login-page'>
            <div className='logo-field'>
                <h1>Board.</h1>
            </div>
            <div className='form-section'>
                <div className='form-field'>
                    <div className='heading'>
                        <h1>Sign In</h1>
                        <p>Sign in to your account</p>
                    </div>
                    <div className='button-field'>
                        <button className='auth-button'
                                onClick={handleGoogle}>
                            <img className='button-logo'
                                 src={google}
                                 alt=''/>
                            Sign in with Google
                        </button>
                        <button className='auth-button'
                                onClick={handleGoogle}>
                            <img className='button-logo'
                                 src={apple}
                                 alt=''/>
                            Sign in with Apple
                        </button>
                    </div>
                    <div className='input-field'>
                        <label>Email Address</label>
                        <input type='text'
                               className='inputs'/>
                        <label>Password</label>
                        <input type='password'
                               className='inputs'/>
                        <a>Forgot Password?</a>
                        <button className='sign-in-button'
                                onClick={handleGoogle}>
                            Sign In
                        </button>
                    </div>
                    <div className='footer'>
                        <p>Dont have an account? <a style={{color: '#346BD4', cursor: 'pointer'}}>Register here</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
