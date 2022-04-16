import React from "react";
import { Link } from "react-router-dom";
import './Dash.css'
const SideBar = () => {
  return (
    <div>
     
      
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="/" className="brand-link">
          <img
            src="./images/opp.jpg"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Oppurtunity</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="">
              <a  className="d-block">
               ADMIN
              </a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item menu-open">
              <Link to="/dashboard">
                <a  className="nav-link active">
                  <i className="nav-icon fas fa-database" />
                  <p>
                    Data
                    
                  </p>
                </a>
                </Link>
              </li>
              
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    ALL USERS
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/cltdb">
                      <a className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>CLIENTS</p>
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/devdb">
                      <a className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>DEVELOPPEURS</p>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-chart-pie" />
                  <p>
                    Charts
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/charts/chartjs.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>ChartJS</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="pages/charts/uplot.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>uPlot</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Forms
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                  <Link to="/offdb">
                    <a  className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>OFFERS</p>
                    </a>
                  </Link>
                  </li>
                  
                </ul>
              </li>
              <li className="nav-header">MESSAGES</li>

              <li className="nav-item">
              {/* <Link to="/messdb"> */}
                <a  className="nav-link">
                  <i className="nav-icon far fa-envelope" />
                  <p>
                    Mailbox
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/mailbox/mailbox.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inbox</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default SideBar;
