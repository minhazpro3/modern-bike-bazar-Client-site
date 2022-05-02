 import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router';

const CheckoutForm = () => {
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
            <h3>pay {findId}</h3>

        </div>
    );
};

export default CheckoutForm;