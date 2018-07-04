import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import './NavBar.css';


class NavBar extends Component {

  
  render() {

    return (
      
      <Navbar>
     
        <Nav>          
          <NavItem eventKey={1} href="/login">Admin</NavItem>
        </Nav> 
        <Nav>          
          <NavItem eventKey={2} href="/SignIn">SignIn</NavItem>
        </Nav>  
        <Nav>          
          <NavItem eventKey={3} href="/EventRegister">Create Event</NavItem>
        </Nav>
         <Nav>          
          <NavItem eventKey={4} href="/UserRegister">User Registration</NavItem>
        </Nav> 
        <Nav>          
          <NavItem eventKey={5} href="/Collabration">Hackathon Collabration</NavItem>
        </Nav> 
        <Nav>          
          <NavItem eventKey={6} href="/App1">Show ScoreCard</NavItem>
        </Nav>               
      </Navbar>
/*
<Navbar>
<Nav>
  <NavItem eventKey={1} href="/SignIn">
    SignIn
  </NavItem>
  <NavItem eventKey={2} href="/UserRegister">
  UserRegistration
  </NavItem>
  <NavItem eventKey={2} href="/UserRegister">
  Enroll Now
  </NavItem>
  <NavDropdown eventKey={3} title="Admin" id="basic-nav-dropdown">
    <MenuItem eventKey={3.1} href="/EventRegister">EventCreation</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey={3.2}>Show Enrollement</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey={3.3}>Show Scores</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey={3.4}>Show Completion level</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey={3.5}>DownLoad Solution</MenuItem>
  </NavDropdown>
</Nav>
</Navbar> */

    );
  }
}

export default NavBar;
