import React from 'react'
import APIURL from "../Helpers/environment"
// import {Form, FormGroup, Label, Input, Button} from 'reactstrap' //1

// import Profile from '../Main/Profile'

// all class components need a RENDER.
// constructor method is called FIRST when component needs to be displayed --its an IMPLEMENTATION of classes -- constructors set up the COMPONENT
class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            // defining the "state" object
            // "This" is the component
            email: '',
            password: '',
            firstName: '',
            lastName: '',
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        // console.log(this.state)

        const url = `${APIURL}/user/signup`;
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then(data => data.json())
            .then(userData => {
                console.log(userData)
                this.props.login(userData.sessionToken)
            })
            .catch(err => console.warn(err))
    }

    // this.setState() updates the entire STATE object
    render() {
        return (
            // returning JSX here
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)} 
                style={{background:"lightBlue", fontSize:"17px", width:"300px", alignContent:"left"}}>
                    <label htmlFor="email">Email:</label>
                    <input
                    type="text"
                    name="email"
                    onChange={(e) => this.setState({email: e.target.value})}/>
                    <br/>
                    <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    name="password"
                    onChange={(e) => this.setState({
                        password: e.target.value
                    })}/>
                    <br/>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                    type="text"
                    name="firstName"
                    onChange={(e) => this.setState({
                        firstName: e.target.value
                    })}/>
                    <br/>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                    type="text"
                    name="lastName"
                    onChange={(e) => this.setState({
                        lastName: e.target.value
                    })}/>
                    <input type="submit"/>
                    {/* <Profile></Profile> */}
                </form>
            </div>
        )
    }
}

export default Signup

// CODE FOR USERNAME (OPTIONAL)
// const Signup = (props) => {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')


//     const handleSubmit = (event) => { //1
//         event.preventDefault()
//         fetch("http://localhost:3000/api/user", {
//             method: 'POST',
//             body: JSON.stringify({user:{username: username, password: password}}),
//             headers: new Headers({
//                 'Content-Type': 'application/json'
//             })
//         }).then(
//             (response) => response.json()
//         ).then((data) => {
//             props.updateToken(data.sessionToken)
//         })
//         // console.log(username, password)
//     }

//     return(
//         <div>
//             <h1>Sign Up</h1>
//             <Form onSubmit={handleSubmit}> 
//                 <FormGroup>
//                     <Label htmlFor="username">Username</Label>

//                     <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} /> 
//                 </FormGroup>
//                 <FormGroup>
//                     <Label htmlFor="password">Password</Label>
//                     <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
//                 </FormGroup>
//                 <Button type="submit">Signup</Button>
//             </Form>
//         </div>
//     )
// }

