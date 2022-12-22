import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [mngOrder, setMngOrder] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch("https://bike-bazar.onrender.com/manageOrder")
      .then((res) => res.json())
      .then((data) => {
        setMngOrder(data);
      });
  }, [reload]);

  const handleUpdate = (id) => {
    const updateData = {
      status: "Shipped",
    };
    const process = window.confirm("Are You Sure For Update Status?");
    if (process) {
      fetch(`https://bike-bazar.onrender.com/updateStatus/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateData),
      })
        .then((res) => res.json())
        .then((data) => {
          setReload(data);
        });
    }
  };

  const handleDelete = (id) => {
    const process = window.confirm('Are you sure? Click "OK"');
    if (process) {
      fetch(`https://bike-bazar.onrender.com/manageOrderDelete/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setReload(data);
        });
    }
  };

  return (
    <div>
      <h4 className="text-center">MANAGE ORDERS</h4>
      <div>
        <table className="table table-hover ">
          <thead>
            <tr>
              <th scope="col">SL</th>
              <th scope="col">Name</th>
              <th scope="col">Product Name</th>
              <th scope="col">Phone</th>
              <th scope="col">City/Date</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>

          {mngOrder.map((info, index) => (
            <tbody className="my-1" key={info._id}>
              <tr>
                <td>{index + 1}</td>
                <td>{info?.name}</td>
                <td>{info?.title.slice(0, 15)}</td>
                <td>{info?.phone}</td>
                <td>
                  {info?.city}
                  <br />
                  {info?.currentDate}
                </td>
                <td>$ {info?.offerPrice}</td>

                <td>
                  <input
                    onClick={() => handleUpdate(info?._id)}
                    className="bg-success p-2 text-white border-0 rounded "
                    type="button"
                    value={info.status}
                  />
                </td>

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

export default ManageOrders;
