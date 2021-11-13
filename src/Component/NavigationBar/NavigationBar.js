import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link  } from 'react-router-dom';
import useAuth from '../Hooks/useAuth'

const NavigationBar = () => {
    const {user,logOut}=useAuth()
    console.log(user);
    return (
        
          <Navbar className="sticky-top" style={{backgroundColor: 'Azure'  }} expand="lg">
  <Container>
     <img style={{width: '120px'}} src="https://i.ibb.co/sKPDp3L/Motorcycle-Racing-Logos-removebg-preview.png" alt=""/>
    <Navbar.Toggle aria-controls="basic-navbar-nav" /> 

   
   <Navbar.Collapse  id="basic-navbar-nav" >
      <Nav className="me-auto d-flex align-items-center ">
        {user.displayName? <h6>Hey {user.displayName}</h6>: ""}
      <Link className="mx-2 text-black text-decoration-none" to="/home"><h6>Home</h6></Link>
    {!user?.email ? 
    <Link  className="mx-2 text-black text-decoration-none" to="/login"><h6>login</h6></Link>:
      <div className="d-flex align-items-center">
        <Link className="mx-2 text-black text-decoration-none" to="/dashboard"><h6>Dashboard</h6></Link>
        <Link to='/'> <Button  className="mx-2 text-black bg-info fw-bolder" onClick={logOut}>logout</Button></Link>
        </div>}
       
      </Nav>
    </Navbar.Collapse>
   
    
  </Container>
  
</Navbar>
           
       
    );
};

export default NavigationBar;