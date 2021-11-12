import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const DashboardDetails = ({url}) => {

    

    return (
        <div className="  text-center ">
           <Card className="mx-2 bg-light pt-3" style={{height: '550px'}}>
           <h5 className="mb-3">Dashboard</h5>
            
            {/* <h6 className="my-3 "> <i className="fas fa-shopping-cart text-danger"></i> 
             <Link   to={`${url}`} className="text-decoration-none text-danger  fw-bold">
                 test</Link></h6> */}
             
            <h6 className="my-3 "> <i className="fas fa-shopping-cart text-danger"></i> 
             <Link   to="/myOrders" className="text-decoration-none text-danger  fw-bold">MY ORDER</Link></h6>

           <h6 className="my-3 "> <i className="fas fa-comment text-danger"></i>
            <Link to="/review" className="text-decoration-none text-danger fw-bold">REVIEW</Link></h6>

           <h6 className="my-3"> <i className="fab fa-cc-amazon-pay text-danger"></i> 
           <Link to="/payment" className="text-decoration-none text-danger fw-bold">PAYMENT</Link></h6>

           <h6 className="my-3"> <i className="fas fa-user-tie text-danger"></i> 
           <Link to="/admin"  className="text-decoration-none text-danger fw-bold">ADMIN</Link></h6>

           {/* <h6 className="my-3"> <i className="fas fa-sign-out-alt text-danger"></i> 
            <Link  className="text-decoration-none text-danger fw-bold">LOGOUT</Link></h6> */}
            </Card>


            {/* aro 2 */}
            
           
            
            
            
        </div>
    );
};

export default DashboardDetails;