import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import useAuth from "../Hooks/useAuth";
import NavigationBar from "../NavigationBar/NavigationBar";

const MoreProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const { reload } = useAuth();
  const [loadding, setLoadding] = useState(true);
  useEffect(() => {
    fetch("https://bike-bazar-3w13.onrender.com/getProducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setLoadding(false);
      });
  }, [reload]);

  if (loadding) {
    return <h2 className="text-center">loadding...</h2>;
  }
  return (
    <div>
      <Banner></Banner>
      <div className="container">
        <div className="row">
          <h3 className="text-center mt-3">OUR COLLECTIONS</h3>
          {allProducts.map((pd) => (
            <div key={pd.regularPrice} className="col-md-3 ">
              <Card
                className="zoomDiv"
                style={{
                  border: "0px",
                  marginTop: "15px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {!pd.image ? (
                  <div className="d-flex  justify-content-center my-5 py-3">
                    <div className="spinner-border " role="status">
                      <span className="visually-hidden mx-5 px-5">
                        Loading...
                      </span>
                    </div>
                  </div>
                ) : (
                  <Card.Img
                    className="zoom mb-3"
                    style={{ width: "100%", height: "150px" }}
                    variant="top"
                    src={pd.image}
                  />
                )}
                <Card.Body className="px-2">
                  <Card.Title className="fw-bold">{pd.title}</Card.Title>
                  <Card.Text>{pd.description}</Card.Text>
                  <Rating
                    className="text-warning"
                    initialRating="5"
                    readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                  ></Rating>
                  <Card.Text className="fw-bold m-0 price">
                    Price: $ {pd.offerPrice}
                  </Card.Text>
                  <Card.Text className="">
                    Regular Price: $<del>{pd.regularPrice}</del>
                  </Card.Text>
                  <Link to={`/placeOrder/${pd._id}`}>
                    {" "}
                    <Button
                      className="w-100 mb-3 py-1 fw-bold"
                      variant="warning"
                      size="sm"
                    >
                      Add to Cart
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;
