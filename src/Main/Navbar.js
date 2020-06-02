import React, {useState} from 'react'
// import Profile from './Profile'
// import Boards from "./Boards"
import { Route, Link, Switch} from 'react-router-dom'
import {   
    Collapse, 
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    // NavbarText,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    // UncontrolledDropdown,
    // Button
} from 'reactstrap'


const Sitebar = (props) => {    
    
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="NavDiv">

      <Navbar light style={{color: "blue", background: "orange"}}>
      <NavbarBrand href="/" className="mr-auto">
        {/*ENTER IN NAV BAR TOP TEXT HERE*/}
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>

        <Nav navbar>
            {/* <NavItem>
              <NavLink className="Home" tag={Link} to="./home">
                Home
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink className="Profile" tag={Link} to="/profile">
                  Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Boards" tag={Link} to="/boards">
                Boards
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/myposts">
                My Posts
              </NavLink>
                {/* check to add somethingto "to" */}
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/">
                Log In/Sign Up
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Sitebar