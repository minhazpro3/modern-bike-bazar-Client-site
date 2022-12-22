import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import NavigationBar from "../NavigationBar/NavigationBar";
const PlaceOrder = () => {
  const { user } = useAuth();
  const { orderId } = useParams();
  const [singleProducts, setSingleProducts] = useState({});

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
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
      status: "Pending",
      payment: "Unpaid",
      img: singleProducts.image,
      currentDate: new Date().toLocaleString(),
    };

    fetch("https://bike-bazar.onrender.com/allOrders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(information),
    })
      .then((res) => res.json())
      .then((data) => {
        warning(true);
        reset();
        if (data.acknowledge) {
        }
      });
  };

  const warning = (alert) => {
    if (alert) {
      Swal.fire({
        title: "Order Successfully!!",
        text: "Thank You So Much",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  };

  useEffect(() => {
    fetch(`https://bike-bazar.onrender.com/singleProducts/${orderId}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProducts(data);
      });
  }, [orderId]);

  return (
    <div>
      <div className="container">
        <div className="row  ">
          <h3 className="text-center text-warning">
            ORDER <span className="text-success">CONFIRM</span>
          </h3>
          <div className="col-md-6">
            {!singleProducts.image ? (
              <div
                className="spinner-border text-secondary d-flex justify-content-center mx-auto"
                role="status"
              >
                <span className="sr-only ">Loading...</span>
              </div>
            ) : (
              <Card
                className="p-5 rounded-3"
                style={{ border: "0px", backgroundColor: "lightGray" }}
              >
                <Card.Img
                  variant="top"
                  style={{ width: "100%" }}
                  src={singleProducts.image}
                />
                <Card.Body className="px-5">
                  <Card.Title>{singleProducts?.title}</Card.Title>
                  <Card.Text>{singleProducts?.description}</Card.Text>
                  <Card.Text
                    className="fw-bold m-0"
                    style={{ color: "chocolate" }}
                  >
                    Price: $ {singleProducts?.offerPrice}
                  </Card.Text>
                  <Card.Text className="">
                    <del>Regular Price: $ {singleProducts?.regularPrice}</del>
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </div>
          <div className="col-md-6 text-center">
            <div
              className="rounded-3"
              style={{
                backgroundColor: "lightGray",
                paddingTop: "30px",
                height: "480px",
              }}
            >
              <h4 className="mb-4 opacity-50 text-primary">
                INPUT YOUR INFORMATION
              </h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className=" my-2 w-75 px-2 rounded-3 border-0 py-2 "
                  {...register("name")}
                  value={user?.displayName}
                  type="text"
                  placeholder="name"
                  required
                />
                <br />
                <input
                  className=" mb-2 w-75 px-2 rounded-3 border-0 py-2 "
                  {...register("email")}
                  value={user?.email}
                  type="email"
                  placeholder="email"
                  required
                />
                <br />
                <input
                  className=" w-75 px-2  rounded-3 border-0 py-2 "
                  type="text"
                  {...register("phone")}
                  placeholder="Phone "
                  required
                />
                <br />
                <input
                  className=" w-75 px-2 mt-2 rounded-3 border-0 py-2 "
                  type="text"
                  {...register("post")}
                  placeholder="post code "
                  required
                />
                <br />
                <input
                  className=" w-75 px-2 my-2 rounded-3  border-0 py-2 "
                  type="text"
                  {...register("city")}
                  placeholder="city "
                  required
                />
                <br />
                <input
                  className=" w-75 px-2 rounded-3 border-0 py-2  "
                  type="text"
                  {...register("country")}
                  placeholder="country "
                  required
                />
                <br />
                <br />
                <input
                  className="bg-danger border-0 w-75 px-2 py-1 text-white rounded my-2"
                  type="submit"
                  value="CONFIRM ORDER"
                />
              </form>
            </div>
            <Link to="/moreProducts">
              <Button
                style={{ backgroundColor: "hotpink" }}
                className=" mt-3 fw-bold border-0"
              >
                MORE COLLECTION <i className="fas fa-arrow-right px-2 "></i>{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
