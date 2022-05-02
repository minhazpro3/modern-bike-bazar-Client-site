 import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React  from 'react';

const CheckoutForm = ({email,name,offerPrice,phone}) => {

  const stripe = useStripe()
  const elements = useElements()
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements){
      return;
    }

    const card = elements.getElement(CardElement)
    if(card==null){
      return;
    }

  }
    
    return (
        <div className="d-flex justify-content-center">
           <form onSubmit={handleSubmit} className="w-50 border-2 border-warning " >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
     <div className="text-center">
     <button className="btn btn-info px-5" type="submit" disabled={!stripe}  >
        Pay
      </button>
     </div>
    </form>

        </div>
    );
};

export default CheckoutForm;