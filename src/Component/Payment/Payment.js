import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import PaymentCart from "./PaymentCart";

const Payment = () => {
  const [payData, setPayData] = useState([]);
  console.log(payData);
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `https://modern-bike-bazar-server-site-production.up.railway.app/myOrder/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPayData(data);
      });
  }, [user?.email]);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">SL</th>
            <th scope="col">Product view</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Payment Status</th>
            <th scope="col">Pay</th>
          </tr>
        </thead>
        {payData.map((data, index) => (
          <PaymentCart key={data._id} {...data} index={index} />
        ))}
      </table>
    </div>
  );
};

export default Payment;
