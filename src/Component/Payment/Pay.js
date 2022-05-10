import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';

const publishable_Key= 'pk_test_51Jw7VaH3ev5JLZVRvA8lgx8YaHqTlusMziZgMjollIE1gPBWx3kP33OB2DK3Fnwpgr2YetIlBzzcMNbzw5Nxbm6T00ilgAiC9a'
const Pay = () => {
    const [product,setProduct]=useState({})
    const [type,setType]=useState(false)
    console.log(product.offerPrice);
    const {findId}=useParams()
    const onToken = (token)=>{
      if(token.created){
        setType(true)
        console.log("something print");
      }
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