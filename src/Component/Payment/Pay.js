import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51Jw7VaH3ev5JLZVRvA8lgx8YaHqTlusMziZgMjollIE1gPBWx3kP33OB2DK3Fnwpgr2YetIlBzzcMNbzw5Nxbm6T00ilgAiC9a')
const Pay = () => {
    const [product,setProduct]=useState({})
    console.log(product);
    const {findId}=useParams()

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
               <img className="w-25" src={product.img} alt="" />
           </div >
              <h3 className="text-center my-5">Pay for: <span className="text-primary"> {product.title}</span> </h3>

            <Elements stripe={stripePromise}>
      <CheckoutForm product={product} />
    </Elements>
        </div>
    );
};

export default Pay;