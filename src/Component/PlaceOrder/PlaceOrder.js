import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
const PlaceOrder = () => {
    const {user}=useAuth();
    const {orderId}=useParams();
    const [singleProducts,setSingleProducts]=useState({})
    

    const { register, handleSubmit  } = useForm();
    const onSubmit = data => {
        
        const information = {
                city: data.city,
                country: data.country,
                email: data.email,
                name: data.name,
                phone: data.phone,
                post: data.post,
                link: singleProducts.link,
                title: singleProducts.title,
                description: singleProducts.description,
                offerPrice: singleProducts.offerPrice,
                regularPrice: singleProducts.regularPrice,
                status: 'Pending',
                currentDate: new  Date().toISOString().slice(0, 10)


        }
        
        fetch('http://localhost:5000/allOrders', {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(information)
        })
        .then(res=>res.json())
        .then(data=>{
        })
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/singleProducts/${orderId}`,)
        .then(res=>res.json())
        .then(data=>{
            setSingleProducts(data)
        })
    },[])

    return (
        <div className="container">
       <div className="row  ">
           <h3 className="text-center">ORDER CONFIRM</h3>
       <div className="col-md-6">
       <Card  className="p-5" style={{  border: '0px' ,backgroundColor: 'lightGray' }} >
                        <Card.Img variant="top" style={{width: '400px'}} src={singleProducts?.link} />
                        <Card.Body className="px-5">
                            <Card.Title>{singleProducts?.title}</Card.Title>
                            <Card.Text>
                            {singleProducts?.description}
                            </Card.Text>
                            <Card.Text className='fw-bold m-0' style={{color: 'chocolate'}}>
                           Price: $ {singleProducts?.offerPrice}
                            </Card.Text>
                            <Card.Text className='' >
                            <del>Regular Price: $ {singleProducts?.regularPrice}</del>
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
        </div>
        <div className="col-md-6 text-center">
       <div style={{  backgroundColor: 'lightGray' , paddingTop: '30px' ,   height: '400px' }}>
           <h4 className="mb-4">INPUT YOUR INFORMATION</h4>
       <form onSubmit={handleSubmit(onSubmit)}>
        <input className=" my-2 w-75 px-2" {...register("name")} value={user?.displayName} type="text" placeholder="name" required />
        <br/>
        <input className=" mb-2 w-75 px-2" {...register("email" )} value={user?.email} type="email" placeholder="email" required />
        <br/>
        <input className=" w-75 px-2 " type="text" {...register("phone")} placeholder="Phone " required />
        <br/>
        <input className=" w-75 px-2 mt-2" type="text" {...register("post")} placeholder="post code " required />
        <br/>
        <input className=" w-75 px-2 my-2 " type="text" {...register("city")} placeholder="city " required />
        <br/>
        <input className=" w-75 px-2 " type="text" {...register("country")} placeholder="country " required />
        <br/>
        <br/>
      <input className="bg-danger border-0 w-75 px-2 py-1 text-white rounded my-2" type="submit" value="CONFIRM ORDER"  />
        </form>
       
       </div>
       <Link to="/moreProducts"><Button  style={{backgroundColor: 'hotpink'}} className=" mt-3 fw-bold border-0">MORE COLLECTION  <i className="fas fa-arrow-right px-2 "></i> </Button></Link>
        </div>
       </div>
        </div>
    );
};

export default PlaceOrder;