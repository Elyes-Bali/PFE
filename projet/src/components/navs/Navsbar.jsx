import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navsbar = () => {
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
  };
  return (
    <div>
      <Navbar bg="light shadow" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="nav_col" id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <li>
                <NavLink
                  to="/"
                  className="nav-links"
                  style={{ marginLeft: ".3rem" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Comunity"
                  className="nav-links"
                  style={{ marginLeft: ".6rem" }}
                >
                  comunity
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Offers"
                  className="nav-links"
                  style={{ marginLeft: ".6rem" }}
                >
                  Offers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Profile"
                  className="nav-links"
                  style={{ marginLeft: ".6rem" }}
                >
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Profil"
                  className="nav-links"
                  style={{ marginLeft: ".6rem" }}
                >
                  Profile
                </NavLink>
              </li>
            </Nav>
            <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">
              <img
                src="/images/transparent.png"
                width="195"
                height={50}
                style={{ marginRight: "11rem" }}
              />
            </NavLink>
            </Navbar.Collapse>
            {/* here */}
            {!token ? (
              <>
                <NavLink
                  to="/login"
                  className="btn btn-outline-primary ms-auto px-4 rounded-pill"
                >
                  <i className="fa fa-sign-in me-2"></i>
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="btn btn-outline-primary ms-2 px-4 rounded-pill"
                >
                  <i className="fa fa-user-plus me-2"></i>
                  Register
                </NavLink>
              </>
            ) : (
              <>
               {isAdmin &&
                <NavLink
                  to="/dashboard"
                  className="btn btn-outline-primary ms-2 px-4 rounded-pill"
                >
                  <i className="fa fa-user-plus me-2"></i>
                  Dashboard
                </NavLink>
                }
                <NavLink
                  onClick={handleLogout}
                  to="/logout"
                  className="btn btn-outline-primary ms-2 px-4 rounded-pill"
                >
                  <i className="fa fa-sign-out me-2"></i>
                  Logout
                </NavLink>
              </>
            )}
          
        </Container>
      </Navbar>
    </div>
  );
};

export default Navsbar;
