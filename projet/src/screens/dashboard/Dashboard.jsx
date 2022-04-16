import React, { useEffect, useState } from "react";
import { Badge, Table } from "react-bootstrap";

import { GetAllClt, GetAllDev, GetAllUsers } from "../../apis/UserApi";
import './Dash.css'
import SideBar from "./SideBar";
const Dashboard = () => {
  const [allusers,setAllusers]= useState([]);

  const [allclt, setAllclt] = useState([]);

  const [alldev, setAlldev] = useState([]);

  const isDevs = async () => {
    const uslg = await GetAllDev();
    setAlldev(uslg);
  };

  const isClt = async () => {
    const uslg = await GetAllClt();
    setAllclt(uslg);
  };

  const isUsers = async () => {
    const uslg = await GetAllUsers();
    setAllusers(uslg);
  };

const Count = ()=>{
  var nbr = 0;
  
    allusers.filter((el)=>{
      if (el.isAdmin!=true) {
        nbr +=1
      }
    })
return nbr
}
const nbruser= Count()


const clt = ()=>{
  var nbr = 0;
  
  allclt.filter((el)=>{
      if (el.isAdmin!=true) {
        nbr +=1
      }
    })
return nbr
}
const nbrclt= clt()

const dev = ()=>{
  var nbr = 0;
  
  alldev.filter((el)=>{
      if (el.isAdmin!=true) {
        nbr +=1
      }
    })
return nbr
}
const nbrdev= dev()




useEffect(()=>{
  isUsers();
  isClt();
  isDevs();
},[])
console.log(allusers);
  return (
    <div>
      {/* Navbar */}
<SideBar/>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Admin Dashboard</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
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
                    <i className="fas fa-user-plus" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">All Users</span>
                    <span className="info-box-number">
                      {nbruser}
                      
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
                    <i className="fas fa-graduation-cap" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Developpeurs</span>
                    <span className="info-box-number">{nbrdev}</span>
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
                    <span className="info-box-text">Clients</span>
                    <span className="info-box-number">{nbrclt}</span>
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
                      <Table className="table m-0">
                        <thead className="txt">
                          
                          <tr>
                           
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody className="txt">
                        {allusers.filter((el)=>el.isAdmin!=true).map((el)=>(
                          <tr>
                           
                            <td>{el.username}</td>
                            <td>
                            <Badge bg="success">
                              {el.role}
                              </Badge>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#00a65a"
                                data-height={20}
                              >
                               {el.email}
                              </div>
                            </td>
                          </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                    {/* /.table-responsive */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer clearfix">
                    
                  </div>
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-4">
                {/* Info Boxes Style 2 */}
               
                {/* /.info-box */}
                





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
      {/* Main Footer */}<br/>
    
    </div>
  );
};

export default Dashboard;
