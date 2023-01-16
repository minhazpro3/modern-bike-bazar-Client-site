import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const ReviewInput = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.photo = user?.photoURL;
    fetch("https://bike-bazar-3w13.onrender.com/allReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        warning(true);
        reset();
      });
  };

  const warning = (alert) => {
    if (alert) {
      Swal.fire({
        title: "Comment Successfully!!",
        text: "Thank You So Much",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  };
  return (
    <div className="text-center container">
      <h2 className="my-4">Customer Review</h2>
      <div className="row">
        <div className="col-md-6 bg-light">
          <div className=" w-100 pt-5 px-5 pb-1" style={{ height: "400px" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="w-100"
                {...register("name")}
                type="text"
                value={user?.displayName}
              />
              <br />
              <input
                className="w-100 my-2"
                {...register("description")}
                type="text"
                placeholder="Comment"
              />
              <br />
              <input
                className="w-100"
                type="number"
                {...register("ratting", { min: 1, max: 5 })}
                required
                placeholder="Ratting max-5"
              />
              <br />
              <input
                className="w-100 my-2 bg-danger border-0 text-white "
                type="submit"
              />
            </form>

            <br />
            <Link to="/moreProducts">
              <Button className="w-100 mt-5 ">More Products </Button>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <img
              style={{ width: "100%" }}
              src="https://elireview.com/wp-content/uploads/2020/10/ELI-WebsiteImage-final.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewInput;
