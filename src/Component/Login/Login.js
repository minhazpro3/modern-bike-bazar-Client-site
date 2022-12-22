import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import NavigationBar from "../NavigationBar/NavigationBar";

const Login = () => {
  const { setUser, googleSignin, loginEmailPassword, setIsLoading } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.state?.from || "/";

  const onSubmit = async (data) => {
    await loginEmailPassword(data.email, data.password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate(url);
        setIsLoading(true);
      })
      .catch((error) => {
        warning(false);
      })
      .finally(() => setIsLoading(false));
  };

  const warning = (error) => {
    if (!error) {
      Swal.fire({
        title: "Invalid Your Input!",
        text: "Please enter right key",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  //   google login
  const handleGoolgeLogin = () => {
    googleSignin()
      .then((result) => {
        setUser(result.user);
        handleSaveUser(result.user);
        navigate(url);
        setIsLoading(true);
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  const handleSaveUser = (saveUser) => {
    fetch("https://modern-bike-bazar-server-site.vercel.app/saveUsers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(saveUser),
    })
      .then((res) => res.json())
      .then((data) => {});
  };
  return (
    <div>
      <div className="container ">
        <h2
          className="text-center my-3 text-success font fw-bold"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Login Now
        </h2>
        <div className="row">
          <div className="col-md-6">
            <div className="text-center">
              <img
                src="https://images.clipartlogo.com/files/istock/previews/3061/30616146-blue-metallic-login-button.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-light p-5 ">
              <div className="ms-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="my-2 w-75 py-1 px-2 rounded-2 shadow-lg border-0  rounded"
                    {...register("email")}
                    type="email"
                    required
                    placeholder="Email"
                  />
                  <br />
                  <input
                    className="my-2 w-75 py-1 px-2 rounded-2 shadow-lg border-0  rounded"
                    {...register("password")}
                    required
                    placeholder="Password"
                    type="password"
                  />
                  <br />
                  <input
                    className="my-2 w-75 bg-danger py-1 text-white border-0 border-info rounded-3"
                    type="submit"
                  />
                </form>
                <Button onClick={handleGoolgeLogin}>Google Sign in</Button>
                <br />
                <p>
                  Don't have an account. <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
