import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';

const publishable_Key= 'pk_test_51Jw7VaH3ev5JLZVRvA8lgx8YaHqTlusMziZgMjollIE1gPBWx3kP33OB2DK3Fnwpgr2YetIlBzzcMNbzw5Nxbm6T00ilgAiC9a'
const Pay = () => {
    const [product,setProduct]=useState({})
    console.log(product);
    const [type,setType]=useState(false)
    const {findId}=useParams()
    const onToken = (token)=>{
      console.log(token);
      if(token.created){
        setType(true)
        status(product._id)
        Swal.fire(
          'Good job!',
          'Your payment successfully!',
          'success'
        )
      }
    }

    const status = (id)=>{
      
      fetch(`http://localhost:5000/paymentStatus/${id}`,{
        method:"PUT",
        headers:{
          "content-type":"application/json"
        }
        
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
      })
    }


    useEffect(() => {
        fetch(`http://localhost:5000/getPay/${findId}`)
          .then((res) => res.json())
          .then((data) => {
            setProduct(data);
          });
      }, [findId]);



    
    return (
        <div>
           <div className="d-flex justify-content-center">
               <img className="w-25 mt-5" src={product.img} alt="" />
           </div >
              <h3 className="text-center my-5">Pay for: <span className="text-primary"> {product.title}</span> </h3>

              <h4 className="fs-4 text-center text-success">${product.offerPrice}</h4>

            <div className="d-flex justify-content-center">
            <StripeCheckout
              name="Pay for product"
              currency="usd"
              amount={parseInt(product.offerPrice)}
        token={onToken}
        stripeKey={publishable_Key}
      />
            </div>
    
        </div>
    );
};

export default Pay;