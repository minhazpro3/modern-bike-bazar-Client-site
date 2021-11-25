import React, {useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const MyOrders = () => {
    const [myData,setMyData]=useState([])
    const [refresh,setRefresh]=useState(false)
    const {user}=useAuth();
    
    
    

    useEffect(()=>{
        fetch(`https://powerful-bayou-53286.herokuapp.com/myOrder/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyData(data)
            
        })
    },[refresh])


    const handleDelete = (id)=>{
      const process = window.confirm('are you sure? for delete ')
      if(process){
        fetch(`https://powerful-bayou-53286.herokuapp.com/deleteOrder/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json"
          }
          
        })
        .then(res=>res.json())
        .then(data=>{
          setRefresh(data);
        })
      }
       
      
    }

    if(!myData.length){
      return <h3 className="text-center">Don't have an any order </h3>
    }


    return (
      <div className="container">
       
          <div className="d-flex align-items-center justify-content-between bg-info p-2 rounded-3 py-3 my-2" >
            
            <h6>Name</h6>
            <h6>Title</h6>
            <h6>Date/City</h6>
            <h6>Status</h6>
            <h6>Delete</h6>
          </div>

         {
           myData.map(p=>
            <div style={{backgroundColor: "Gainsboro"}} className="col-md-12 d-flex align-items-center justify-content-between  p-2 rounded-3 my-2">
            <h6>{p.name}</h6>
            <h6>{p.title.slice(0,15)}</h6>
            <h6>{p.city} <br/>{p.currentDate}</h6>
            <h6 className={p.status==="Shipped"? "text-success": "text-danger"} >{p.status}</h6>
            <h6><Button  className="p-1 bg-danger border-0" onClick={()=>handleDelete(p._id)}>Delete</Button></h6>
          </div>
            )
         }
        
        
   </div>
    );
};

export default MyOrders;