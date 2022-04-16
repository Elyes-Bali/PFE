import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Avatar } from "@chakra-ui/react";

const Navsbar = () => {
  const [user,setUser]=useState({})
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");
  const isDev = localStorage.getItem("isDev");
  const isClient = localStorage.getItem("isClient");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isDev");
    localStorage.removeItem("isClient");
  };


  const isLoggedIn = async () => {
    const options = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    try {
      const res = await axios.get("/api/user/auth", options);
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    isLoggedIn();
  },[])
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
                activeclassname= "active"
                  to="/"
                  className="nav-links"
                  style={{ marginLeft: ".3rem" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                 activeClassName= "active"
                  to="/Comunity"
                  className="nav-links"
                  style={{ marginLeft: ".6rem" }}
                >
                  comunity
                </NavLink>
              </li>

              
              {isClient && (
              <li className="nav-item">
                <NavLink

                  to="/Create"
                  className="nav-links"
                  style={{ marginLeft: ".6rem" }}
                >
                  Create
                </NavLink>
              </li>
              )}
              
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
                  to="/Profil"
                  className="nav-links"
                  style={{ marginLeft: ".6rem" }}
                >
                  Profile
                </NavLink>
              </li>
              
            </Nav>
          
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
              {isAdmin && (
                <NavLink
                  to="/dashboard"
                  className="btn btn-outline-primary ms-2 px-4 rounded-pill"
                >
                  <i className="fa fa-user-plus me-2"></i>
                  Dashboard
                </NavLink>
              )}
              <Avatar className="avatar" size="md" cursor="pointer" name={user.name} src={user.pic} />
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
