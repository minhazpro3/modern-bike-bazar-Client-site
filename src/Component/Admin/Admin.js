import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <div>
        <i className="far fa-plus-square text-white me-2 my-4"></i>
        <Link
          to={`/dashboard/addProduct`}
          className="text-decoration-none text-white fw-bold"
        >
          Add Products
        </Link>
        <br />

        <i className="fas fa-share-square text-white me-2 my-4"></i>
        <Link
          to={`/dashboard/manageProducts`}
          className="text-decoration-none text-white fw-bold"
        >
          Manage Products
        </Link>
        <br />

        <i className="fas fa-share-square text-white me-2 my-4"></i>
        <Link
          to={`/dashboard/manageOrders`}
          className="text-decoration-none text-white fw-bold"
        >
          Manage Orders
        </Link>
        <br />

        <i className="fas fa-comment text-white me-2 my-4"></i>
        <Link
          to={`/dashboard/manageComments`}
          className="text-decoration-none text-white fw-bold"
        >
          Manage Comments
        </Link>
        <br />

        <i className="fas fa-user-cog text-white me-2 my-4"></i>
        <Link
          to={`/dashboard/makeAdmin`}
          className="text-decoration-none text-white fw-bold"
        >
          Make Admin
        </Link>
        <br />
      </div>
    </div>
  );
};

export default Admin;
