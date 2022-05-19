import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router";
import Swal from "sweetalert2";

import useAuth from "../Hooks/useAuth";
import NavigationBar from "../NavigationBar/NavigationBar";

const Register = () => {
  const {
    setUser,
    googleSignin,
    createUserEmailPassword,
    setIsLoading,
    updateName,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const url = location.state?.from || "/";

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    if (data.password === data.password2) {
      await createUserEmailPassword(data.email, data.password)
        .then((userCredential) => {
          setUser(userCredential.user);
          handleSaveUser(userCredential.user);

          navigate(url);
          setIsLoading(true);
        })
        .catch((error) => {
          alert(false);
        })
        .finally(() => setIsLoading(false));
    } else {
      alert(false);
    }
    updateName(data.name);
  };

  const alert = (values) => {
    if (!values) {
      Swal.fire({
        title: "Invalid Your Input!",
        text: "Please enter right key",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const handleSaveUser = (saveUser) => {
    fetch("https://rocky-river-82616.herokuapp.com/saveUsers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(saveUser),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  const handleGoolgeLogin = () => {
    googleSignin()
      .then((result) => {
        setUser(result.user);
        navigate(url);
        setIsLoading(true);
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <div className="container">
        <div className="row my-2">
          <h2
            className="text-center my-3 text-success font fw-bold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Register{" "}
          </h2>
          <div className="col-md-6">
            <div>
              <img
                className="w-100"
                src="https://media.istockphoto.com/vectors/online-registration-and-sign-up-concept-people-signing-up-or-login-to-vector-id1219250750"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 bg-light text-center py-5">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="name"
                  className=" w-50"
                  {...register("name")}
                  type="text"
                  required
                />
                <br />
                <input
                  className="my-2 w-50"
                  {...register("email")}
                  placeholder="email"
                  type="email"
                  required
                />
                <br />
                <input
                  className=" w-50"
                  {...register("password")}
                  placeholder="password"
                  type="password"
                  required
                />
                <br />
                <input
                  className="mt-2 w-50"
                  {...register("password2")}
                  placeholder="Confirm password"
                  type="password"
                  required
                />
                <br />
                <input className="my-2 w-50" type="submit" />
              </form>
              <Button onClick={handleGoolgeLogin}>Google Sign in</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
