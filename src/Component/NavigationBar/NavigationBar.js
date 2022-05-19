import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const NavigationBar = () => {
  const { user, logOut } = useAuth();

  return (
    <Navbar style={{ backgroundColor: " #060b26" }} expand="lg">
      <Container>
        <img
          style={{ width: "120px" }}
          src="https://i.ibb.co/sKPDp3L/Motorcycle-Racing-Logos-removebg-preview.png"
          alt=""
        />
        <Navbar.Toggle
          style={{ backgroundColor: "white" }}
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse className="flex-grow-0 ">
          <Nav className=" d-flex  align-items-center text-white">
            <div className="d-flex ">
              {user.displayName ? <h6>Hey {user.displayName}</h6> : ""}
              <Link
                className="mx-2 text-black text-decoration-none text-white"
                to="/"
              >
                <h6>Home</h6>
              </Link>
            </div>
            <div className="d-flex">
              {user?.email ? (
                <div className="d-flex">
                  <Link
                    className="mx-2 text-black text-decoration-none text-white"
                    to="/dashboard"
                  >
                    <h6>Dashboard</h6>
                  </Link>
                  <h6>
                    <Link
                      to="/"
                      onClick={logOut}
                      className=" text-white text-decoration-none"
                    >
                      {" "}
                      Logout
                    </Link>
                  </h6>
                </div>
              ) : (
                <Link
                  className="mx-2 text-white text-decoration-none"
                  to="/login"
                >
                  <h6>login</h6>
                </Link>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
