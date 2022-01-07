    import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import NavigationBar from '../NavigationBar/NavigationBar';

    
    const MoreProducts = () => {
        const [allProducts,setAllProducts]=useState([])
        const [loadding,setLoadding]=useState(true)
        useEffect(()=>{
            fetch('https://powerful-bayou-53286.herokuapp.com/getProducts')
            .then(res=>res.json())
            .then(data=>{
                setAllProducts(data)
                setLoadding(false)
    
            })
        },[])

        if(loadding){
            return <h2 className="text-center">loadding...</h2>
        }
        return (
           <div>
                <NavigationBar></NavigationBar>
              <Banner></Banner>
                <div className="container">
            <div className='row'>
            <h3 className="text-center mt-3">OUR COLLECTIONS</h3>
            {
                allProducts.map(pd=> 
                 <div key={pd.regularPrice} className="col-md-4 ">
                       <Card  style={{  border: '0px' , boxShadow:  '0px 0px 20px 2px' , marginTop: '15px', height: '550px' }} >
                        <Card.Img style={{width: '100%', height: '300px'}} variant="top" 
                        src={`data:image/*;base64,${pd.image}`} />
                        <Card.Body className="px-5">
                            <Card.Title>{pd.title.slice(0,15)}</Card.Title>
                            <Card.Text>
                            {pd.description.slice(0,70)}
                            </Card.Text>
                            <Card.Text className='fw-bold m-0' style={{color: 'chocolate'}}>
                           Price: $ {pd.regularPrice}
                            </Card.Text>
                            <Card.Text className='' >
                            <del>Regular Price: ${pd.offerPrice}</del>
                            </Card.Text>
                           <Link to={`/placeOrder/${pd._id}`}> <Button className='w-100 mb-3 py-1' variant="warning" size="sm">Add to Cart</Button></Link>
                        </Card.Body>
                        </Card>
                 </div>
                    )
            }
        </div>
       </div>
           </div>
        );
    };
    
    export default MoreProducts;