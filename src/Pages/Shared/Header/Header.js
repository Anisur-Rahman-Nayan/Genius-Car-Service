import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { useSignOut } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Header = () => {

  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
    return (
        <>
      <Navbar sticky='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"> <img height={30} src={logo} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#experts">Expert</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>

            <Nav.Link as={Link} to="/about">About</Nav.Link>

            {
              user && <>
               <Nav.Link as={Link} to="/addService">Add</Nav.Link>
               <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
               <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
              </>
            }
           
           { user ? 
                  <button className='btn btn-link text-white text-decoration-none' onClick={()=>signOut(auth)}>Sign Out</button>
           : <Nav.Link as={Link} to="/login">
             Login
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
};

export default Header;