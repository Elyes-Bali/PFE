import React, { useState, useEffect } from "react";
import { CurrentUser, GetAllDev } from "../../apis/UserApi";
import { Avatar } from "@chakra-ui/react";
import "./Navvbare.css";
import { Link } from "react-router-dom";
const Navvbare = () => {
  

  const [user, setUser] = useState({});
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
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
  };

  

  useEffect(() => {
    isLoggedIn();
    
  }, []);
 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Container wrapper */}
      <div className="container-fluid">
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar brand */}
          <a className="navbar-brand brdd mt-2 mt-lg-0" href="/">
            <img
              src="/images/transparent.png"
              width={130}
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Comunity">
                Comunity
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Offers">
                Offers
              </a>
            </li>
            {isClient && (
            <li className="nav-item">
              <a className="nav-link" href="/clt">
                My Offers
              </a>
            </li>
            )}
          </ul>
          {/* Left links */}
        </div>
        {/* Collapsible wrapper */}
        {/* Right elements */}
        <div className="d-flex align-items-center">
          {/* Icon */}

          {/* Notifications */}
          <>
                {isClient && (
          <div className="dropdown">
            <>
              <a
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-pencil" aria-hidden="true"></i>
                <span className="badge rounded-pill badge-notification bg-danger"></span>
              </a>
            </>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
             
                  <li>
                    <a className="dropdown-item" href="/Create">
                      Create
                    </a>
                  </li>
                
              
            </ul>
          </div>)}</>
          {/* Avatar */}
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <Avatar
                className="avatar"
                size="md"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              {!token ? (
                <>
                  <li>
                    <a className="dropdown-item" href="/login">
                    <i className="fa fa-sign-in" aria-hidden="true"/>&nbsp;
                      Login
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/register">
                    <i className="fa fa-user-plus" aria-hidden="true"/>&nbsp;
                      Registre
                    </a>
                  </li>
                </>
              ) : (
                <>
                  {isAdmin && (
                    <li>
                      <a className="dropdown-item" href="/dashboard">
                      <i className="fa fa-tachometer" aria-hidden="true"/>&nbsp;
                        Dashboard
                      </a>
                    </li>
                  )}

                  <li>
                 
                    <a
                    
                      className="dropdown-item"
                      onClick={handleLogout}
                      href="/logout"
                    > <i className="fa fa-sign-out" aria-hidden="true"/>&nbsp;
                      Logout
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Profil">
                    <i className="fa fa-cog" aria-hidden="true"/>&nbsp;
                      Settings
                    </a>
                  </li>
                  {isDev && (<>
                  <li>
                  <Link to={`/dev/${user._id}`} state={{ dev: user }}>
                    <a className="dropdown-item" >
                    <i className="fa fa-user" aria-hidden="true"/>&nbsp;
                      My Profile
                    </a>
                    </Link>
                  </li>

                    <li>
                    
                      <a href="/devof" className="dropdown-item" >
                      <i className="fa fa-bookmark-o" aria-hidden="true"/>&nbsp;
                        My Offers
                      </a>
                    
                    </li>
                  </>)}
                </>
              )}
            </ul>
          </div>
        </div>
        {/* Right elements */}
      </div>
      {/* Container wrapper */}
    </nav>
  );
};
export default Navvbare;
