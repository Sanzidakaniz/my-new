import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../customHooks/useAuth/useAuth';


const Header = () => {
      // Use history for changing the route
      const history = useHistory();

  const {user, handleSignOut} = useAuth();
  const handleLogOut = () => {
        handleSignOut();
        user.email="";
        history.push('/account');

  }
    return (
            <section>
                <div className="headerSection">
                <Navbar  collapseOnSelect expand="sm" >
                    <Container>
                        <NavLink id="Logo" to="/"><span className="logoText">Sk MediCare</span></NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink id="navMenu" to="/home">Home</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <NavLink id="navMenu" to="/about">About</NavLink>&nbsp;&nbsp;&nbsp;
                            <NavLink id="navMenu" to="/medicineCorner">Medicine Section</NavLink>
                            &nbsp;&nbsp;&nbsp;
                           

                         </Nav> 
                            <div className="account">                          
                           
                          {user.email && <span style={{color:'black'}}>Login As: {user?.displayName}</span>}
                          {
                            user.email?
                            <button  className="btn" onClick={handleLogOut}>Log Out</button>
                            :
                            <NavLink to="/Account"><button className="btn">Log In </button></NavLink>
                          }
                          
                          </div>
                      </Navbar.Collapse>
                    </Container>
                    </Navbar>
                </div>
            </section>
    );
};

export default Header;