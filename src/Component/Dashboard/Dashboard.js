import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Dashboard.css";
import { Outlet, Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Admin from "../Admin/Admin";
const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [admin, setAdmin] = useState(false);
  const { user, logOut } = useAuth();

  useEffect(() => {
    fetch(`https://bike-bazar-3w13.onrender.com/checkedAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0].role === "admin") {
          setAdmin(true);
        }
      });
  }, [user?.email]);

  return (
    <div>
      <div>
        <div className="navbarDash ">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav id="dash-nav" className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbarDash-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            <div className="my-5 mx-auto ">
              {!admin && (
                <div>
                  <i className="fas fa-shopping-cart text-white me-2 my-4"></i>
                  <Link
                    to={`/dashboard/myOrder`}
                    className="text-decoration-none text-white  fw-bold my-4"
                  >
                    My order
                  </Link>

                  <br />
                  <i className="fas fa-comment text-white me-2 my-4"></i>
                  <Link
                    to={`/dashboard/review`}
                    className="text-decoration-none text-white fw-bold"
                  >
                    Review
                  </Link>
                  <br />
                  <i className="fab fa-cc-amazon-pay text-white me-2 my-4"></i>
                  <Link
                    to={`/dashboard/payment`}
                    className="text-decoration-none text-white fw-bold my-4"
                  >
                    Payment
                  </Link>
                  <br />
                </div>
              )}

              {admin && <Admin></Admin>}

              <i className="fas fa-sign-in-alt me-2 text-white my-4"></i>
              <Link
                to="/"
                onClick={logOut}
                className="text-decoration-none text-white p-0 border-0 fw-bold my-4"
              >
                Logout
              </Link>
            </div>
          </ul>
        </nav>

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
