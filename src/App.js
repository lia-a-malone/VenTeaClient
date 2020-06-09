import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import WorkoutIndex from './workouts/WorkoutIndex';
import Auth from '../src/Auth/AuthForm'
import Sitebar from './Main/Navbar'
import Home from './Main/Home'
import Boards from './Main/Boards'
import Posts from './Main/Posts'
import Profile from './Main/Profile'
import './App.css'
function App () {
  
  const [sessionToken, setSessionToken] = useState('') //1: useState hook creates new state var (sessionToken) 

  useEffect(() => { //2: updates sessionToken var if Chrome saved a sessionToken in localStorage
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => { //3: takes in & saves a token in 2 places = localStorage & state var, sessionToken
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
    console.log(sessionToken)
  }

  // Logout
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('')
  }

  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/> : <Auth updateToken={updateToken}/>)
  // }
  
  return (
      <Router>
        <div
        style={{fontSize:"20px"}}>
            <Sitebar sessionToken={sessionToken} clearToken={clearToken}></Sitebar>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/front">
            </Route>
            <Route path="/profile">
              <Profile sessionToken={sessionToken} updateToken={updateToken}/>
            </Route>
            <Route path="/myposts">
              <Posts/>
            </Route>
            <Route path="/boards">
              <Boards/>
            </Route>
            <Route path="/">
              <Auth updateToken={updateToken} sessionToken={sessionToken} style={{background:"359582"}}/>
            </Route>
            </Switch>
        </div>
      </Router>
    )
}
export default App

// function Home(){
//   return <h2>Home</h2>
// }
// function Profile(){
//   return <h2>Profile</h2>
// }
// function Posts(){
//   return <h2>My Posts</h2>
// }
// function Boards(){
//   return <h2>Boards</h2>
// }


// Making links to other pages

// return (
//   <Router>
//     <div>
//       <nav>
//         <Sitebar></Sitebar>
//         <ul>
//           <li>
//             <Link to="/home">Home</Link>
//           </li>
//           <li>
//             <Link to="/profile">Profile</Link>
//           </li>
//           <li>
//             <Link to="/myposts">My Posts</Link>
//           </li>
//           <li>
//             <Link to="/boards">Boards</Link>
//           </li>
//           <li>
//             <Link to="/">Log in/Sign up</Link>
//           </li>
//         </ul>
//       </nav>

      {/* <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/myposts">
          <Posts/>
        </Route>
        <Route path="/boards">
          <Boards/>
        </Route>
        <Route path="/">
          <Auth/>
        </Route>
        </Switch>
    </div>
  </Router>
) */}
