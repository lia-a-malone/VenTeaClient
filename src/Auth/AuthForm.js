import React, { useState } from 'react'
// import {
//     Switch,
//     Route,
//     Link,
//     Redirect,
//     useHistory,
//     useLocation
//   } from "react-router-dom"
import Signup from './Signup'
import Login from './Login'
import Profile from '../Main/Profile'
import './AuthForm.css'


{/* <link rel="stylesheet" type="text/css" href="AuthForm.css"> */}


const Auth = (props) => {//2: pull in props that will be passed down
    const [isLoggingIn, setIsLoggingIn] = useState(true)
    // const [isSigningUp, setIsSigningUp] = useState(true)
    
return(
    <div className="AuthDiv">
        {/* <h2>{Signup ? 'Signup' : 'Sign In'}</h2> */}
        {/* {} shows JSX is in use */}
        {
            isLoggingIn ? <p>Ready to spill the tea? Sign in!</p> : <p>Need to spill the tea? Sign up!</p>
        }
        {
            isLoggingIn ? <Login updateToken={props.updateToken} /> : <Signup login={props.login}/>
        }
        {
            isLoggingIn ? (
                <button onClick={e => setIsLoggingIn(!isLoggingIn)}>
                Sign up
                </button>
            ) : (
                <button onClick={e => setIsLoggingIn(!isLoggingIn)}>
                Sign in
                </button>
            )
        }
    </div>
)

}

export default Auth