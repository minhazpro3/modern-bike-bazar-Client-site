import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import AddProducts from "../AddProducts/AddProducts";

const MyOrders = () => {
  const [myData, setMyData] = useState([]);
  const { user } = useAuth();
  const [admin, setAdmin] = useState("");

  useEffect(() => {
    fetch(`https://rocky-river-82616.herokuapp.com/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
      });
  }, [user?.email]);

  useEffect(() => {
    fetch(`https://rocky-river-82616.herokuapp.com/checkedAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0].role === "admin") {
          setAdmin(true);
        }
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`https://rocky-river-82616.herokuapp.com/deleteOrder/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setMyData(myData.filter((data) => data._id !== id));
          });
      }
    });
  };

  return (
    <div className="container">
      {admin ? (
        <AddProducts />
      ) : (
        <div className="d-flex align-items-center justify-content-between bg-info p-2 rounded-3 py-3 my-2">
          <h6>Name</h6>
          <h6>Title</h6>
          <h6>Date/City</h6>
          <h6>Status</h6>
          <h6>Delete</h6>
        </div>
      )}

      {myData.map((p) => (
        <div
          key={p._id}
          style={{ backgroundColor: "Gainsboro" }}
          className="col-md-12 d-flex align-items-center justify-content-between  p-2 rounded-3 my-2"
        >
          <h6>{p.name}</h6>
          <h6>{p.title.slice(0, 15)}</h6>
          <h6>
            {p.city} <br />
            {p.currentDate}
          </h6>
          <h6
            className={p.status === "Shipped" ? "text-success" : "text-danger"}
          >
            {p.status}
          </h6>
          <h6>
            <Button
              className="p-1 bg-danger border-0"
              onClick={() => handleDelete(p._id)}
            >
              Delete
            </Button>
          </h6>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
