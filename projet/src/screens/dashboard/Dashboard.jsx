import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-dark">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="index3.html" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Navbar Search */}
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="navbar-search"
              href="#"
              role="button"
            >
              <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-comments" />
              <span className="badge badge-danger navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img
                    src="dist/img/user1-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 mr-3 img-circle"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-right text-sm text-danger">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img
                    src="dist/img/user8-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      John Pierce
                      <span className="float-right text-sm text-muted">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">I got your message bro</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img
                    src="dist/img/user3-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                      <span className="float-right text-sm text-warning">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item dropdown-footer">
                See All Messages
              </a>
            </div>
          </li>
          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell" />
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">
                15 Notifications
              </span>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-envelope mr-2" /> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-users mr-2" /> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-file mr-2" /> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item dropdown-footer">
                See All Notifications
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              href="#"
              role="button"
            >
              <i className="fas fa-th-large" />
            </a>
          </li>
        </ul>
      </nav>
      {/* /.navbar */}
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
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
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="./index.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./index2.html" className="nav-link active">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./index3.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Widgets
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    Layout Options
                    <i className="fas fa-angle-left right" />
                    <span className="badge badge-info right">6</span>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/top-nav-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation + Sidebar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/layout/boxed.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Boxed</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/fixed-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Sidebar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/fixed-sidebar-custom.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Fixed Sidebar <small>+ Custom Area</small>
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/fixed-topnav.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Navbar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/fixed-footer.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Footer</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/collapsed-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Collapsed Sidebar</p>
                    </a>
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
                    <a href="pages/charts/flot.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Flot</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/inline.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inline</p>
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
                  <i className="nav-icon fas fa-tree" />
                  <p>
                    UI Elements
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/UI/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>General</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/icons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Icons</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/buttons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Buttons</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/sliders.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Sliders</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/modals.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Modals &amp; Alerts</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/navbar.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Navbar &amp; Tabs</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/timeline.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Timeline</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/ribbons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Ribbons</p>
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
                    <a href="pages/forms/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>General Elements</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/advanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Advanced Elements</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/editors.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Editors</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/validation.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Validation</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Tables
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/tables/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Simple Tables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/data.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>DataTables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/jsgrid.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>jsGrid</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">EXAMPLES</li>
              <li className="nav-item">
                <a href="pages/calendar.html" className="nav-link">
                  <i className="nav-icon fas fa-calendar-alt" />
                  <p>
                    Calendar
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/gallery.html" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>Gallery</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/kanban.html" className="nav-link">
                  <i className="nav-icon fas fa-columns" />
                  <p>Kanban Board</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
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
                  <li className="nav-item">
                    <a href="pages/mailbox/compose.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Compose</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/read-mail.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Read</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-book" />
                  <p>
                    Pages
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/examples/invoice.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Invoice</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/profile.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Profile</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/e-commerce.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>E-commerce</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/projects.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Projects</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/project-add.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Project Add</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/project-edit.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Project Edit</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/project-detail.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Project Detail</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/contacts.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Contacts</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/faq.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>FAQ</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/contact-us.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Contact us</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>
                    Extras
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Login &amp; Register v1
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="pages/examples/login.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Login v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/register.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Register v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/forgot-password.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Forgot Password v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/recover-password.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Recover Password v1</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Login &amp; Register v2
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="pages/examples/login-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Login v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/register-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Register v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/forgot-password-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Forgot Password v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="pages/examples/recover-password-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Recover Password v2</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/lockscreen.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Lockscreen</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/legacy-user-menu.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Legacy User Menu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/language-menu.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Language Menu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/404.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Error 404</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/500.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Error 500</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/pace.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pace</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/blank.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Blank Page</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="starter.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Starter Page</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-search" />
                  <p>
                    Search
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/search/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Simple Search</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/search/enhanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Enhanced</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">MISCELLANEOUS</li>
              <li className="nav-item">
                <a href="iframe.html" className="nav-link">
                  <i className="nav-icon fas fa-ellipsis-h" />
                  <p>Tabbed IFrame Plugin</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                  <i className="nav-icon fas fa-file" />
                  <p>Documentation</p>
                </a>
              </li>
              <li className="nav-header">MULTI LEVEL EXAMPLE</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Level 1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-circle" />
                  <p>
                    Level 1
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Level 2
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Level 1</p>
                </a>
              </li>
              <li className="nav-header">LABELS</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-danger" />
                  <p className="text">Important</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-warning" />
                  <p>Warning</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info" />
                  <p>Informational</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard v2</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard v2</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Info boxes */}
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                  <span className="info-box-icon bg-info elevation-1">
                    <i className="fas fa-cog" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">CPU Traffic</span>
                    <span className="info-box-number">
                      10
                      <small>%</small>
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-danger elevation-1">
                    <i className="fas fa-thumbs-up" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Likes</span>
                    <span className="info-box-number">41,410</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              {/* fix for small devices only */}
              <div className="clearfix hidden-md-up" />
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-success elevation-1">
                    <i className="fas fa-shopping-cart" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Sales</span>
                    <span className="info-box-number">760</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-warning elevation-1">
                    <i className="fas fa-users" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">New Members</span>
                    <span className="info-box-number">2,000</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Monthly Recap Report</h5>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-tool dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <i className="fas fa-wrench" />
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          role="menu"
                        >
                          <a href="#" className="dropdown-item">
                            Action
                          </a>
                          <a href="#" className="dropdown-item">
                            Another action
                          </a>
                          <a href="#" className="dropdown-item">
                            Something else here
                          </a>
                          <a className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <p className="text-center">
                          <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                        </p>
                        <div className="chart">
                          {/* Sales Chart Canvas */}
                          <canvas
                            id="salesChart"
                            height={180}
                            style={{ height: 180 }}
                          />
                        </div>
                        {/* /.chart-responsive */}
                      </div>
                      {/* /.col */}
                      <div className="col-md-4">
                        <p className="text-center">
                          <strong>Goal Completion</strong>
                        </p>
                        <div className="progress-group">
                          Add Products to Cart
                          <span className="float-right">
                            <b>160</b>/200
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                        {/* /.progress-group */}
                        <div className="progress-group">
                          Complete Purchase
                          <span className="float-right">
                            <b>310</b>/400
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-danger"
                              style={{ width: "75%" }}
                            />
                          </div>
                        </div>
                        {/* /.progress-group */}
                        <div className="progress-group">
                          <span className="progress-text">
                            Visit Premium Page
                          </span>
                          <span className="float-right">
                            <b>480</b>/800
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </div>
                        {/* /.progress-group */}
                        <div className="progress-group">
                          Send Inquiries
                          <span className="float-right">
                            <b>250</b>/500
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: "50%" }}
                            />
                          </div>
                        </div>
                        {/* /.progress-group */}
                      </div>
                      {/* /.col */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/* ./card-body */}
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-sm-3 col-6">
                        <div className="description-block border-right">
                          <span className="description-percentage text-success">
                            <i className="fas fa-caret-up" /> 17%
                          </span>
                          <h5 className="description-header">$35,210.43</h5>
                          <span className="description-text">
                            TOTAL REVENUE
                          </span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                      <div className="col-sm-3 col-6">
                        <div className="description-block border-right">
                          <span className="description-percentage text-warning">
                            <i className="fas fa-caret-left" /> 0%
                          </span>
                          <h5 className="description-header">$10,390.90</h5>
                          <span className="description-text">TOTAL COST</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                      <div className="col-sm-3 col-6">
                        <div className="description-block border-right">
                          <span className="description-percentage text-success">
                            <i className="fas fa-caret-up" /> 20%
                          </span>
                          <h5 className="description-header">$24,813.53</h5>
                          <span className="description-text">TOTAL PROFIT</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                      <div className="col-sm-3 col-6">
                        <div className="description-block">
                          <span className="description-percentage text-danger">
                            <i className="fas fa-caret-down" /> 18%
                          </span>
                          <h5 className="description-header">1200</h5>
                          <span className="description-text">
                            GOAL COMPLETIONS
                          </span>
                        </div>
                        {/* /.description-block */}
                      </div>
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            {/* Main row */}
            <div className="row">
              {/* Left col */}
              <div className="col-md-8">
                {/* MAP & BOX PANE */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">US-Visitors Report</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body p-0">
                    <div className="d-md-flex">
                      <div
                        className="p-1 flex-fill"
                        style={{ overflow: "hidden" }}
                      >
                        {/* Map will be created here */}
                        <div
                          id="world-map-markers"
                          style={{ height: 325, overflow: "hidden" }}
                        >
                          <div className="map" />
                        </div>
                      </div>
                      <div className="card-pane-right bg-success pt-2 pb-2 pl-4 pr-4">
                        <div className="description-block mb-4">
                          <div className="sparkbar pad" data-color="#fff">
                            90,70,90,70,75,80,70
                          </div>
                          <h5 className="description-header">8390</h5>
                          <span className="description-text">Visits</span>
                        </div>
                        {/* /.description-block */}
                        <div className="description-block mb-4">
                          <div className="sparkbar pad" data-color="#fff">
                            90,50,90,70,61,83,63
                          </div>
                          <h5 className="description-header">30%</h5>
                          <span className="description-text">Referrals</span>
                        </div>
                        {/* /.description-block */}
                        <div className="description-block">
                          <div className="sparkbar pad" data-color="#fff">
                            90,50,90,70,61,83,63
                          </div>
                          <h5 className="description-header">70%</h5>
                          <span className="description-text">Organic</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.card-pane-right */}
                    </div>
                    {/* /.d-md-flex */}
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
                <div className="row">
                  <div className="col-md-6">
                    {/* DIRECT CHAT */}
                    <div className="card direct-chat direct-chat-warning">
                      <div className="card-header">
                        <h3 className="card-title">Direct Chat</h3>
                        <div className="card-tools">
                          <span
                            title="3 New Messages"
                            className="badge badge-warning"
                          >
                            3
                          </span>
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="collapse"
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-tool"
                            title="Contacts"
                            data-widget="chat-pane-toggle"
                          >
                            <i className="fas fa-comments" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="remove"
                          >
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        {/* Conversations are loaded here */}
                        <div className="direct-chat-messages">
                          {/* Message. Default to the left */}
                          <div className="direct-chat-msg">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-left">
                                Alexander Pierce
                              </span>
                              <span className="direct-chat-timestamp float-right">
                                23 Jan 2:00 pm
                              </span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img
                              className="direct-chat-img"
                              src="dist/img/user1-128x128.jpg"
                              alt="message user image"
                            />
                            {/* /.direct-chat-img */}
                            <div className="direct-chat-text">
                              Is this template really for free? That's
                              unbelievable!
                            </div>
                            {/* /.direct-chat-text */}
                          </div>
                          {/* /.direct-chat-msg */}
                          {/* Message to the right */}
                          <div className="direct-chat-msg right">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-right">
                                Sarah Bullock
                              </span>
                              <span className="direct-chat-timestamp float-left">
                                23 Jan 2:05 pm
                              </span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img
                              className="direct-chat-img"
                              src="dist/img/user3-128x128.jpg"
                              alt="message user image"
                            />
                            {/* /.direct-chat-img */}
                            <div className="direct-chat-text">
                              You better believe it!
                            </div>
                            {/* /.direct-chat-text */}
                          </div>
                          {/* /.direct-chat-msg */}
                          {/* Message. Default to the left */}
                          <div className="direct-chat-msg">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-left">
                                Alexander Pierce
                              </span>
                              <span className="direct-chat-timestamp float-right">
                                23 Jan 5:37 pm
                              </span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img
                              className="direct-chat-img"
                              src="dist/img/user1-128x128.jpg"
                              alt="message user image"
                            />
                            {/* /.direct-chat-img */}
                            <div className="direct-chat-text">
                              Working with AdminLTE on a great new app! Wanna
                              join?
                            </div>
                            {/* /.direct-chat-text */}
                          </div>
                          {/* /.direct-chat-msg */}
                          {/* Message to the right */}
                          <div className="direct-chat-msg right">
                            <div className="direct-chat-infos clearfix">
                              <span className="direct-chat-name float-right">
                                Sarah Bullock
                              </span>
                              <span className="direct-chat-timestamp float-left">
                                23 Jan 6:10 pm
                              </span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img
                              className="direct-chat-img"
                              src="dist/img/user3-128x128.jpg"
                              alt="message user image"
                            />
                            {/* /.direct-chat-img */}
                            <div className="direct-chat-text">
                              I would love to.
                            </div>
                            {/* /.direct-chat-text */}
                          </div>
                          {/* /.direct-chat-msg */}
                        </div>
                        {/*/.direct-chat-messages*/}
                        {/* Contacts are loaded here */}
                        <div className="direct-chat-contacts">
                          <ul className="contacts-list">
                            <li>
                              <a href="#">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user1-128x128.jpg"
                                  alt="User Avatar"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Count Dracula
                                    <small className="contacts-list-date float-right">
                                      2/28/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    How have you been? I was...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="#">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user7-128x128.jpg"
                                  alt="User Avatar"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Sarah Doe
                                    <small className="contacts-list-date float-right">
                                      2/23/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    I will be waiting for...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="#">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user3-128x128.jpg"
                                  alt="User Avatar"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Nadia Jolie
                                    <small className="contacts-list-date float-right">
                                      2/20/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    I'll call you back at...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="#">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user5-128x128.jpg"
                                  alt="User Avatar"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Nora S. Vans
                                    <small className="contacts-list-date float-right">
                                      2/10/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    Where is your new...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="#">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user6-128x128.jpg"
                                  alt="User Avatar"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    John K.
                                    <small className="contacts-list-date float-right">
                                      1/27/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    Can I take a look at...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                            <li>
                              <a href="#">
                                <img
                                  className="contacts-list-img"
                                  src="dist/img/user8-128x128.jpg"
                                  alt="User Avatar"
                                />
                                <div className="contacts-list-info">
                                  <span className="contacts-list-name">
                                    Kenneth M.
                                    <small className="contacts-list-date float-right">
                                      1/4/2015
                                    </small>
                                  </span>
                                  <span className="contacts-list-msg">
                                    Never mind I found...
                                  </span>
                                </div>
                                {/* /.contacts-list-info */}
                              </a>
                            </li>
                            {/* End Contact Item */}
                          </ul>
                          {/* /.contacts-list */}
                        </div>
                        {/* /.direct-chat-pane */}
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer">
                        <form action="#" method="post">
                          <div className="input-group">
                            <input
                              type="text"
                              name="message"
                              placeholder="Type Message ..."
                              className="form-control"
                            />
                            <span className="input-group-append">
                              <button type="button" className="btn btn-warning">
                                Send
                              </button>
                            </span>
                          </div>
                        </form>
                      </div>
                      {/* /.card-footer*/}
                    </div>
                    {/*/.direct-chat */}
                  </div>
                  {/* /.col */}
                  <div className="col-md-6">
                    {/* USERS LIST */}
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Latest Members</h3>
                        <div className="card-tools">
                          <span className="badge badge-danger">
                            8 New Members
                          </span>
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="collapse"
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="remove"
                          >
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body p-0">
                        <ul className="users-list clearfix">
                          <li>
                            <img
                              src="dist/img/user1-128x128.jpg"
                              alt="User Image"
                            />
                            <a className="users-list-name" href="#">
                              Alexander Pierce
                            </a>
                            <span className="users-list-date">Today</span>
                          </li>
                          <li>
                            <img
                              src="dist/img/user8-128x128.jpg"
                              alt="User Image"
                            />
                            <a className="users-list-name" href="#">
                              Norman
                            </a>
                            <span className="users-list-date">Yesterday</span>
                          </li>
                          <li>
                            <img
                              src="dist/img/user7-128x128.jpg"
                              alt="User Image"
                            />
                            <a className="users-list-name" href="#">
                              Jane
                            </a>
                            <span className="users-list-date">12 Jan</span>
                          </li>
                          <li>
                            <img
                              src="dist/img/user6-128x128.jpg"
                              alt="User Image"
                            />
                            <a className="users-list-name" href="#">
                              John
                            </a>
                            <span className="users-list-date">12 Jan</span>
                          </li>
                          <li>
                            <img
                              src="dist/img/user2-160x160.jpg"
                              alt="User Image"
                            />
                            <a className="users-list-name" href="#">
                              Alexander
                            </a>
                            <span className="users-list-date">13 Jan</span>
                          </li>
                          <li>
                            <img
                              src="dist/img/user5-128x128.jpg"
                              alt="User Image"
                            />
                            <a className="users-list-name" href="#">
                              Sarah
                            </a>
                            <span className="users-list-date">14 Jan</span>
                          </li>
                          <li>
                            <img
                              src="dist/img/user4-128x128.jpg"
                              alt="User Image"
                            />
                            <a className="users-list-name" href="#">
                              Nora
                            </a>
                            <span className="users-list-date">15 Jan</span>
                          </li>
                          <li>
                            <img
                              src="dist/img/user3-128x128.jpg"
                              alt="User Image"
                            />
                            <a className="users-list-name" href="#">
                              Nadia
                            </a>
                            <span className="users-list-date">15 Jan</span>
                          </li>
                        </ul>
                        {/* /.users-list */}
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer text-center">
                        <a href="javascript:">View All Users</a>
                      </div>
                      {/* /.card-footer */}
                    </div>
                    {/*/.card */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
                {/* TABLE: LATEST ORDERS */}
                <div className="card">
                  <div className="card-header border-transparent">
                    <h3 className="card-title">Latest Orders</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table m-0">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Item</th>
                            <th>Status</th>
                            <th>Popularity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR9842</a>
                            </td>
                            <td>Call of Duty IV</td>
                            <td>
                              <span className="badge badge-success">
                                Shipped
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#00a65a"
                                data-height={20}
                              >
                                90,80,90,-70,61,-83,63
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR1848</a>
                            </td>
                            <td>Samsung Smart TV</td>
                            <td>
                              <span className="badge badge-warning">
                                Pending
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#f39c12"
                                data-height={20}
                              >
                                90,80,-90,70,61,-83,68
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR7429</a>
                            </td>
                            <td>iPhone 6 Plus</td>
                            <td>
                              <span className="badge badge-danger">
                                Delivered
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#f56954"
                                data-height={20}
                              >
                                90,-80,90,70,-61,83,63
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR7429</a>
                            </td>
                            <td>Samsung Smart TV</td>
                            <td>
                              <span className="badge badge-info">
                                Processing
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#00c0ef"
                                data-height={20}
                              >
                                90,80,-90,70,-61,83,63
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR1848</a>
                            </td>
                            <td>Samsung Smart TV</td>
                            <td>
                              <span className="badge badge-warning">
                                Pending
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#f39c12"
                                data-height={20}
                              >
                                90,80,-90,70,61,-83,68
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR7429</a>
                            </td>
                            <td>iPhone 6 Plus</td>
                            <td>
                              <span className="badge badge-danger">
                                Delivered
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#f56954"
                                data-height={20}
                              >
                                90,-80,90,70,-61,83,63
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR9842</a>
                            </td>
                            <td>Call of Duty IV</td>
                            <td>
                              <span className="badge badge-success">
                                Shipped
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#00a65a"
                                data-height={20}
                              >
                                90,80,90,-70,61,-83,63
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /.table-responsive */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer clearfix">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-sm btn-info float-left"
                    >
                      Place New Order
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-sm btn-secondary float-right"
                    >
                      View All Orders
                    </a>
                  </div>
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-4">
                {/* Info Boxes Style 2 */}
                <div className="info-box mb-3 bg-warning">
                  <span className="info-box-icon">
                    <i className="fas fa-tag" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Inventory</span>
                    <span className="info-box-number">5,200</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                <div className="info-box mb-3 bg-success">
                  <span className="info-box-icon">
                    <i className="far fa-heart" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Mentions</span>
                    <span className="info-box-number">92,050</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                <div className="info-box mb-3 bg-danger">
                  <span className="info-box-icon">
                    <i className="fas fa-cloud-download-alt" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Downloads</span>
                    <span className="info-box-number">114,381</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                <div className="info-box mb-3 bg-info">
                  <span className="info-box-icon">
                    <i className="far fa-comment" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Direct Messages</span>
                    <span className="info-box-number">163,921</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Browser Usage</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="chart-responsive">
                          <canvas id="pieChart" height={150} />
                        </div>
                        {/* ./chart-responsive */}
                      </div>
                      {/* /.col */}
                      <div className="col-md-4">
                        <ul className="chart-legend clearfix">
                          <li>
                            <i className="far fa-circle text-danger" /> Chrome
                          </li>
                          <li>
                            <i className="far fa-circle text-success" /> IE
                          </li>
                          <li>
                            <i className="far fa-circle text-warning" /> FireFox
                          </li>
                          <li>
                            <i className="far fa-circle text-info" /> Safari
                          </li>
                          <li>
                            <i className="far fa-circle text-primary" /> Opera
                          </li>
                          <li>
                            <i className="far fa-circle text-secondary" />{" "}
                            Navigator
                          </li>
                        </ul>
                      </div>
                      {/* /.col */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer p-0">
                    <ul className="nav nav-pills flex-column">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          United States of America
                          <span className="float-right text-danger">
                            <i className="fas fa-arrow-down text-sm" />
                            12%
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          India
                          <span className="float-right text-success">
                            <i className="fas fa-arrow-up text-sm" /> 4%
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          China
                          <span className="float-right text-warning">
                            <i className="fas fa-arrow-left text-sm" /> 0%
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /.footer */}
                </div>
                {/* /.card */}
                {/* PRODUCT LIST */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Recently Added Products</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body p-0">
                    <ul className="products-list product-list-in-card pl-2 pr-2">
                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href="javascript:void(0)"
                            className="product-title"
                          >
                            Samsung TV
                            <span className="badge badge-warning float-right">
                              $1800
                            </span>
                          </a>
                          <span className="product-description">
                            Samsung 32" 1080p 60Hz LED Smart HDTV.
                          </span>
                        </div>
                      </li>
                      {/* /.item */}
                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href="javascript:void(0)"
                            className="product-title"
                          >
                            Bicycle
                            <span className="badge badge-info float-right">
                              $700
                            </span>
                          </a>
                          <span className="product-description">
                            26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                          </span>
                        </div>
                      </li>
                      {/* /.item */}
                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href="javascript:void(0)"
                            className="product-title"
                          >
                            Xbox One{" "}
                            <span className="badge badge-danger float-right">
                              $350
                            </span>
                          </a>
                          <span className="product-description">
                            Xbox One Console Bundle with Halo Master Chief
                            Collection.
                          </span>
                        </div>
                      </li>
                      {/* /.item */}
                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href="javascript:void(0)"
                            className="product-title"
                          >
                            PlayStation 4
                            <span className="badge badge-success float-right">
                              $399
                            </span>
                          </a>
                          <span className="product-description">
                            PlayStation 4 500GB Console (PS4)
                          </span>
                        </div>
                      </li>
                      {/* /.item */}
                    </ul>
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer text-center">
                    <a href="javascript:void(0)" className="uppercase">
                      View All Products
                    </a>
                  </div>
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/*/. container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
      {/* /.control-sidebar */}
      {/* Main Footer */}
      <footer className="main-footer">
        <strong>
          Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.2.0
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
