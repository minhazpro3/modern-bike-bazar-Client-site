import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  //  const [fresh, setFresh] = useState(true)

  useEffect(() => {
    fetch("https://modern-bike-bazar-server-site.vercel.app/manageProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "If you want to delete click, Ok!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(
          `https://modern-bike-bazar-server-site.vercel.app/manProduct/${id}`,
          {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setProducts(products.filter((item) => item._id !== id));
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-center">Products Management: {products.length}</h2>
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">SL</th>
              <th scope="col">Name</th>
              <th scope="col">Regular Price</th>
              <th scope="col">Offer Price</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>

          {products.map((info, index) => (
            <tbody key={info._id}>
              <tr className=" my-5">
                <td>{index + 1}</td>
                <td>{info?.title}</td>
                <td>
                  $ <del>{info?.regularPrice}</del>
                </td>
                <td>$ {info?.offerPrice}</td>
                <td>
                  <input
                    onClick={() => handleDelete(info?._id)}
                    className="bg-danger p-2 text-white border-0 rounded "
                    type="button"
                    value="Delete"
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
