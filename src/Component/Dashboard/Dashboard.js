import React, {  useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import ReviewInput from '../ReviewInput/ReviewInput';
import Payment from '../Payment/Payment';
import { Button, Card } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
const Dashboard = () => {
  const { path, url } = useRouteMatch();
  const [admin,setAdmin]=useState(false)
  const {user,logOut}=useAuth()

    useEffect(()=>{
      fetch(`https://powerful-bayou-53286.herokuapp.com/checkedAdmin/${user?.email}`)
      .then(res=>res.json())
      .then(data=>{
        if(data[0].role==="admin"){
          console.log(data);
        setAdmin(true)
        }
        
      })
    },[user?.email])
    
    return (
        <div>
          
            
            <div className="row">
            <div className="col-md-2 ">
              <div className="">
              <div className="  text-center ">
           <Card className="mx-2 bg-light pt-3" style={{height: '550px'}}>
           <h5 className="mb-3">Dashboard</h5>
            
             
            
              <h6 className="my-3 "> <i className="fas fa-shopping-cart text-danger me-2"></i> 
             <Link   to="/myOrders" className="text-decoration-none text-danger  fw-bold">MY ORDER</Link></h6>

           <h6 className="my-3 "> <i className="fas fa-comment text-danger me-2"></i>
            <Link to="/review" className="text-decoration-none text-danger fw-bold">REVIEW</Link></h6>

           <h6 className="my-3"> <i className="fab fa-cc-amazon-pay text-danger me-2"></i> 
           <Link to="/payment" className="text-decoration-none text-danger fw-bold">PAYMENT</Link></h6>
            

           {admin && <h6 className="my-3"> <i className="fas fa-user-tie text-danger me-2"></i> 
           <Link to="/admin"  className="text-decoration-none text-danger fw-bold">ADMIN</Link></h6>}

           <h6 className="my-3"> <i className="fas fa-sign-in-alt me-1 text-danger"></i> 
           <Button onClick={logOut} className="text-decoration-none text-danger bg-white border-0 fw-bold">LOGOUT</Button></h6>

            </Card>
            
        </div>
              </div>
            </div>
            <div className="col-md-10">
               {/* nested route 2 tar beshi link kaj kore na , ai jonno comment corlam ,, ui te link thik dekha jai but component change hoy na  */}
            {/* <Switch>
        <Route exact path={path}>
          <MyOrders></MyOrders>
        </Route>
        <Route  path={`${path}/:review`}>
          <ReviewInput></ReviewInput>
        </Route>
        <Route  path={`${path}/:payment`}>
          <h2>kamala sundari tumi koi</h2>
        </Route>
      </Switch> */}

              <MyOrders></MyOrders>
            </div>
            </div>
          
        </div>
    );
};

export default Dashboard;