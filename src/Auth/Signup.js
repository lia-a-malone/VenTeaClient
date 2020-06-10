import React, {useState} from 'react'
import APIURL from "../Helpers/environment"
import {withRouter} from 'react-router-dom'
import borderLogo from "../teaborderlog.png"
// import { render } from '@testing-library/react'
// import APIURL to files that send network requests


const Signup = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    // valid form - "isFormValid" = the state variable
    const [isFormValid, setIsFormValid] = useState(false)
    // changing false/true
    const handleChange = () => {
        console.log('err')
        if (email.length > 0 && password.length > 0){
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const url=`${APIURL}/user/signup`
        // every FETCH with a URL needs to be replace to the HEROKU URL. use back tics ``

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(data => data.json()) //parse use data.json()
        .then(userData => {   
            props.updateToken(userData.sessionToken)
            if(userData.sessionToken===localStorage.getItem("token"))
            props.history.push("/profile")
        })
        .catch(err => console.log(err))
    }

    // render() {
    return (
        <div className="container borderBox"
        style={{borderRadius:"20px", width:"500px", backgroundImage:`url(${borderLogo})`, backgroundSize:"cover", height:"500px", paddingTop:"150px", backgroundPosition:"center"}}>
            {/* border:"3px dotted #46AB79" */}
            <h4
            style={{color:"#4EB187"}}>Sign up </h4>
       <form className="signupForm" onSubmit={(e) => handleSubmit(e)}>
        <div class="form-row"
        style={{width:"300px", textAlign:"center", display:"inline-block"}}>
            <div class="col" className="firstNameDiv">
                {/* <label htmlFor="firstName"
                style={{border:"1px solid orange"}}>First Name</label> */}
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        className="input-field"
                        onChange={(e) => {
                            setFirstName(e.target.value);
                            handleChange()
                            console.log(isFormValid)
                        }}
                    />
            </div>
            <div class="col" className="lastNameDiv">
                {/* <label htmlFor="lastName"
                style={{border:"1px solid green"}}>Last name</label> */}
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="input-field"
                    onChange={(e) => {
                        setLastName(e.target.value);
                        // console.log(email);
                        // console.log(password);
                        handleChange()
                        console.log(isFormValid)
                    }}
                />
            </div>
        </div>
        <br/>
        <div class="form-row"
        style={{width:"300px", textAlign:"center", display:"inline-block"}}>
            <div class="col" className="emailDiv">
                {/* <label htmlFor="email"
                style={{border:"1px solid pink"}}>Email</label> */}
                <input
                style={{display:"inline-block"}}
                    type="text"
                    id="emailField"
                    name="email"
                    placeholder="Email"
                    className="input-field"
                    onChange={(e) => {
                        setEmail(e.target.value);
                        // console.log(email);
                        // console.log(password);
                        handleChange()
                        console.log(isFormValid)
                    }}
                />
            </div>
            <div class="col" className="pwordDiv">
                {/* <label htmlFor="password"
                style={{border:"1px solid yellow"}}>
                    Password</label> */}
                <input
                style={{display:"inline-block"}}
                    type="password"
                    id="pWordField"
                    name="password"
                    placeholder="Password"
                    className="input-field"
                    onChange={(e) => {
                        setPassword(e.target.value);
                        // console.log(email)
                        // console.log(password)
                        handleChange()
                        console.log(isFormValid)
                    }}
                />
            </div>
            </div>
            <br/>
                <input type="submit" disabled={!isFormValid}/>
            </form>
        </div>
    )
    // }
}

export default withRouter(Signup)



