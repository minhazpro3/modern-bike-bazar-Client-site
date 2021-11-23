import React, { useEffect ,useState} from 'react';
import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeProducts = () => {
    const [allProducts,setAllProducts]=useState([])
    const [loadding,setLoadding]=useState(true)
    useEffect(()=>{
        fetch('https://powerful-bayou-53286.herokuapp.com/getProducts')
        .then(res=>res.json())
        .then(data=>{
            setAllProducts(data.slice(0,12))
            setLoadding(false)
        })
    },[])

    if(loadding){
        return <h2 className="text-center">loadding...</h2>
    }

    return (
       <div className="container">
            <div className='row'>
            
                
               <div className="d-flex justify-content-between bg-whith px-3 my-2">
                   <img style={{width: '100px'}} src="https://i.ibb.co/0q7zg3f/Logo-Road-Racerz.png" alt="" />

               <Link to="/moreProducts">More ... </Link>
               </div>
                <img  src="https://i.ibb.co/m90sZ2h/honda-2.gif" alt="" />

               

            {
                allProducts.map(pd=> 
                 <div key={pd._id} className="col-md-3 col-lg-3 col-sm-6  ">
                       <Card  style={{  border: '0px' , boxShadow:  '0px 0px 20px 2px' , marginTop: '15px',   height: '380px' }} >
                        <Card.Img  style={{width: '100%', height: '150px'}} variant="top" src={pd.link} />
                        <Card.Body className="px-2">
                            <Card.Title>{pd.title.slice(0,15)}</Card.Title>
                            <Card.Text>
                            {pd.description.slice(0,50)}
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
    );
};

export default HomeProducts;