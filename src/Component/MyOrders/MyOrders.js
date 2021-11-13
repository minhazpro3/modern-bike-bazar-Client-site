import React, {useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
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


    return (
        <div>
            <h3 className="text-center my-2">YOUR ALL ORDERS {myData.length}</h3>
        <Table striped bordered hover>
    <thead>
      <tr>
        <th>SL</th>
        <th>Name</th>
        <th>Title</th>
        <th>Phone No</th>
        <th>Price</th>
        <th>City</th>
        <th>Date</th>
        <th>Status</th>
        <th>Delete</th>
      </tr>
    </thead>

    {
      myData?.map((pd,index ) => 
        <tbody key={pd._id}>
        <tr>
          <td>{(index+1)}</td>
          <td>{pd.name}</td>
          <td>{pd.title}</td>
          <td>{pd.phone}</td>
          <td>${pd.offerPrice}</td>
          <td>{pd.city}</td>
          <td>{pd.currentDate}</td>
          <td>{pd.status}</td>
          <td><button  onClick={()=>handleDelete(pd._id)} className="btn btn-danger justify-content-end">Delete</button></td>
        </tr>
      </tbody> )
    }
   
  </Table>
  {/* {!isLoading ? <div className=" spin"> <Spinner animation="border" /></div>: ""} */}
   </div>
    );
};

export default MyOrders;