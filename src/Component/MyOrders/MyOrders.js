import React, {useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';


const MyOrders = () => {
    const [myData,setMyData]=useState([])
    const {user}=useAuth();
    
  console.log(myData);
    useEffect(()=>{
        fetch(`https://powerful-bayou-53286.herokuapp.com/myOrder/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyData(data)
         
            
        })
    },[user?.email])


    const handleDelete = (id)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          fetch(`https://powerful-bayou-53286.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json"
            }
            
          })
          .then(res=>res.json())
          .then(data=>{
            setMyData(myData.filter(data=>data._id!==id))    
          })
        }
      })
     
       
      
    }

    // if(!myData.length){
    //   return <ReactLoading className="my-5  mx-auto" type="bars" color="blue" height="8rem" width="6rem"  />
    // }


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
           myData.map(p=>(
            <div key={p._id} style={{backgroundColor: "Gainsboro"}} className="col-md-12 d-flex align-items-center justify-content-between  p-2 rounded-3 my-2">
            <h6>{p.name}</h6>
            <h6>{p.title.slice(0,15)}</h6>
            <h6>{p.city} <br/>{p.currentDate}</h6>
            <h6 className={p.status==="Shipped"? "text-success": "text-danger"} >{p.status}</h6>
            <h6><Button  className="p-1 bg-danger border-0" onClick={()=>handleDelete(p._id)}>Delete</Button></h6>
          </div>
           ))
         }
        
        
   </div>
    );
};

export default MyOrders;