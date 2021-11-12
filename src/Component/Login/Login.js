import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Button } from 'react-bootstrap';

const Login = () => {
    const {user,setUser, googleSignin,loginEmailPassword,setIsLoading}=useAuth();
    const { register, handleSubmit } = useForm();
    const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || '/home';

  const onSubmit = async data => {
     await loginEmailPassword(data.email,data.password)
     .then((userCredential) => {
        setUser(userCredential.user)
        history.push(url)
        setIsLoading(true)
      })
      .catch((error) => {
        const errorMessage = error.message;
      }).finally(()=>setIsLoading(false));

    } ;

  

//   google login
    const handleGoolgeLogin = ()=>{
        googleSignin()
        .then((result) => {
            setUser(result.user);
            handleSaveUser(result.user)
            history.push(url)
            setIsLoading(true)
        }).catch((error) => {
        
        }).finally(()=>setIsLoading(false))
    }


    const handleSaveUser = (saveUser) => {
    
        fetch('http://localhost:5000/saveUsers', {
          method: "POST",
          headers: {
            "content-type":"application/json"
          },
          body:JSON.stringify(saveUser)
        })
        .then(res=>res.json())
        .then(data=>{
        })
     }
    return (
        <div className="container ">
            <h2 className="text-center my-3">LOGIN NOW</h2>
            <div className="row">
            
                <div className="col-md-6">
                <div className="text-center">
                        <img src="https://images.clipartlogo.com/files/istock/previews/3061/30616146-blue-metallic-login-button.jpg" alt="" />
                </div>
                </div>
                <div className="col-md-6">
           <div className="bg-light p-5 ">
                    
            <div className="ms-5">
            <form onSubmit={handleSubmit(onSubmit)}>
            <input className="my-2 w-75 ps-2" {...register("email")} required  placeholder="email" type="email" />
            <br/>
            <input className=" w-75 ps-2" {...register("password")} required placeholder="password" type="password"  />
            <br/>
            <input className="my-2 w-75 bg-danger border-0 text-white" type="submit" />
            </form>
            <Button onClick={handleGoolgeLogin}>Google Sign in</Button>
            <br/>
            <p>Don't have an account. <Link to="/register">Register</Link></p>
            </div>
           </div>
                </div>
            </div>
        </div>
    );
};

export default Login;