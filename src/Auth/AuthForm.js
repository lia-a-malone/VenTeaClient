import React, { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import './AuthForm.css'
import '../App.css'

{/* <link rel="stylesheet" type="text/css" href="AuthForm.css"> */}


const Auth = (props) => {//2: pull in props that will be passed down
    const [isLoggingIn, setIsLoggingIn] = useState(true)
    // const [isSigningUp, setIsSigningUp] = useState(true)
    
return(
    <div className="AuthDiv"
    style={{textAlign:"center", fontSize:"20px", color:"#4D896F"}}>
        {/* <h2>{Signup ? 'Signup' : 'Sign In'}</h2> */}
        {/* {} shows JSX is in use */}
        {
            isLoggingIn ? <p>Ready to spill the tea? Sign in!</p> : <p>Need to spill the tea? Sign up!</p>
        }
        {
            isLoggingIn ? <Login updateToken={props.updateToken}/> : <Signup updateToken={props.updateToken}/>
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