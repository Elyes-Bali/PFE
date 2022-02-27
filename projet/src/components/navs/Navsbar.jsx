import React from "react";
import {
  Navbar,
  Container,
  Nav,
  
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Navbar.css';
const Navsbar = () => {
  return (
    <div>
      <Navbar bg="light shadow" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <li>
              <NavLink to='/' className='nav-links' style={{ marginLeft: '.3rem' }}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/Comunity' className='nav-links' style={{ marginLeft: '.6rem' }} >
                comunity
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/Offers' className='nav-links' style={{ marginLeft: '.6rem' }}>
                Offers
              </NavLink>
            </li>
         <li className='nav-item'>
              <NavLink to='/Profile' className='nav-links' style={{ marginLeft: '.6rem' }}>
                Profile
              </NavLink>
            </li>
          <li className='nav-item'>
              <NavLink to='/Profil' className='nav-links' style={{ marginLeft: '.6rem' }}>
                Profile
              </NavLink>
            </li>
            </Nav>
            <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">
              Opportunity
            </NavLink>

            <NavLink to='/login' className="btn btn-outline-primary ms-auto px-4 rounded-pill">
            <i className='fa fa-sign-in me-2'></i>

              Login
            </NavLink>
            <NavLink to='/register' className="btn btn-outline-primary ms-2 px-4 rounded-pill">
            <i className="fa fa-user-plus me-2"></i>

              Register
            </NavLink>
            <NavLink to='/dashboard' className="btn btn-outline-primary ms-2 px-4 rounded-pill">
            <i className="fa fa-user-plus me-2"></i>

              Dashboard
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navsbar;
