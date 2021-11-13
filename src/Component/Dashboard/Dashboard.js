import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import ReviewInput from '../ReviewInput/ReviewInput';
import Payment from '../Payment/Payment';
import { Card } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
const Dashboard = () => {
  const { path, url } = useRouteMatch();
  
  const {user}=useAuth()
  useEffect(()=>{
      fetch(`http://localhost:5000/adminConform/${user?.email}`)
      .then(res=>res.json())
      .then(data=>{
         console.log(data);
          
      })
  },[])
    
    return (
        <div>
          {/* akane dashboard details use kora  */}
            <h3>this is Dashboard</h3>
            <div className="row">
            <div className="col-md-2 ">
              <div className="">
              <div className="  text-center ">
           <Card className="mx-2 bg-light pt-3" style={{height: '550px'}}>
           <h5 className="mb-3">Dashboard</h5>
            
             
            <h6 className="my-3 "> <i className="fas fa-shopping-cart text-danger"></i> 
             <Link   to={`${url}`} className="text-decoration-none text-danger  fw-bold">MY ORDER</Link></h6>

           <h6 className="my-3 "> <i className="fas fa-comment text-danger"></i>
            <Link to={`${url}/review`} className="text-decoration-none text-danger fw-bold">REVIEW</Link></h6>

           <h6 className="my-3"> <i className="fab fa-cc-amazon-pay text-danger"></i> 
           <Link to={`${url}/payment`} className="text-decoration-none text-danger fw-bold">PAYMENT</Link></h6>

           <h6 className="my-3"> <i className="fas fa-user-tie text-danger"></i> 
           <Link to="/admin"  className="text-decoration-none text-danger fw-bold">ADMIN</Link></h6>

           {/* <h6 className="my-3"> <i className="fas fa-sign-out-alt text-danger"></i> 
            <Link  className="text-decoration-none text-danger fw-bold">LOGOUT</Link></h6> */}
            </Card>


            {/* aro 2 */}
            
           
            
            
            
        </div>
              </div>
            </div>
            <div className="col-md-10">
            <Switch>
        <Route exact path={path}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/:review`}>
          <ReviewInput></ReviewInput>
        </Route>
        <Route path={`${path}/:payment`}>
          <Payment></Payment>
        </Route>
      </Switch>
            </div>
            </div>
            {/* <div className="d-flex gap-3 justify-content-center">
                
                <Link to="/myService">my services</Link>
                <Link to="/addService">Add service</Link>
                <Link to="/manageAllService">Manage All service</Link>
                
            </div> */}
        </div>
    );
};

export default Dashboard;