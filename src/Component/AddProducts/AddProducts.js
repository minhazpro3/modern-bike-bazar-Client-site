import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const AddProducts = () => {
  const { setReload } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [imgUrl, setImgUrl] = useState("");
  const onSubmit = (data) => {
    const formData1 = {
      title: data.title,
      regularPrice: data.regularPrice,
      offerPrice: data.offerPrice,
      description: data.description,
      image: imgUrl,
    };

    const url = `https://bike-bazar-3w13.onrender.com/addBike`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData1),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          reset();
          setReload(true);
          warning(true);
        }
      });
  };

  const setImage = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("key", "a8859d2230e61a23e842e4132855a72d");
    formData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", formData)
      .then((res) => {
        setImgUrl(res.data.data.url);
      })
      .catch((error) => {});
  };

  const warning = (alert) => {
    if (alert) {
      Swal.fire({
        title: "Product Added Successfully!!",
        text: "Thank You So Much",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  };
  return (
    <div className="container py-5">
      <div className="row">
        <h3 className="text-center text-warning pb-3">
          ADD <span className="text-success"> PRODUCT</span>
        </h3>
        <div className="col-md-6">
          <img
            style={{ width: "100%" }}
            src="https://wpklik.com/wp-content/uploads/2018/12/How-to-Properly-Add-Products-in-WooCommerce.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <div className="bg-light text-center py-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className=" my-2 w-50 px-2 rounded-pb"
                {...register("title")}
                type="text"
                placeholder="Title"
                required
              />

              <br />
              <input
                className=" mb-2 w-50 px-2"
                {...register("regularPrice")}
                defaultValue=""
                type="text"
                placeholder="Regular Price"
                required
              />

              <br />
              <input
                className=" w-50 px-2 "
                type="text"
                {...register("offerPrice")}
                placeholder="Offer Price "
                required
              />

              <br />

              <input
                className=" w-50  mt-2"
                {...register("image")}
                onChange={setImage}
                required
                accept="image/*"
                type="file"
              />
              <br />

              <input
                className=" w-50 px-2 my-2 "
                type="text"
                {...register("description")}
                placeholder="description "
                required
              />
              <br />

              <input
                className="bg-danger border-0 w-50 px-2 py-1 text-white rounded my-2"
                type="submit"
                value="Add"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
