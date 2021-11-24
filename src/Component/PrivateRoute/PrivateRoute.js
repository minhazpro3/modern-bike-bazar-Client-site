import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom'; 
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children,...rest }) => {
    const {user,isLoading}=useAuth();
    const location = useLocation();
    

    if(isLoading){
      return <div className="text-center"><Spinner animation="border" variant="primary" /></div>
    }
    
    if(user?.email){
      return children;
    }
      return <Navigate to="/login" state={{ from: location }} />
    
    

};

export default PrivateRoute;