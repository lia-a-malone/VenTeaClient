import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {   
    Collapse, 
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
} from 'reactstrap'


const Sitebar = (props) => {    
    
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="NavDiv"
    style={{color:"#46AB79"}}>

      <Navbar light>
      <NavbarBrand href="/" className="mr-auto">
        {/*ENTER IN NAV BAR TOP TEXT HERE*/}
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>

        <Nav navbar
        style={{fontSize:"10", fontColor:"#46AB79"}}>
            <NavItem>
              <NavLink className="Home" tag={Link} to="/home">
                Home
              </NavLink>
            </NavItem>
            {localStorage.getItem("token")?  <NavItem>
              <NavLink className="Profile" tag={Link} to="/profile">
                  Profile
              </NavLink>
            </NavItem> : null}
            {/* <NavItem>
              <NavLink className="Boards" tag={Link} to="/boards">
                Boards
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/myposts">
                My Posts
              </NavLink>
            </NavItem> */}
            {!props.sessionToken ?  <NavItem>
              <NavLink tag={Link} to="/">
                Log In/Sign Up
              </NavLink>
            </NavItem>
            : 
            <NavItem>
              <NavLink tag={Link}>
                <button onClick={props.clearToken}>Logout</button> 
              </NavLink>
            </NavItem>
              }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Sitebar