import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import Swal from 'sweetalert2';

import useAuth from '../Hooks/useAuth';


const Register = () => {
    const {user,setUser, googleSignin,createUserEmailPassword,setIsLoading,updateName}=useAuth();
    
    
    const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || '/home';
    
    const { register, handleSubmit } = useForm();
  const onSubmit = async data =>{
      if(data.password === data.password2){
        await createUserEmailPassword(data.email,data.password)
        .then((userCredential) => {
            setUser(userCredential.user)
            handleSaveUser(userCredential.user)
           
            history.push(url)
            setIsLoading(true)
          })
          .catch((error) => {
           alert(false)
          }).finally(()=>setIsLoading(false))
      }
      else{
        alert(false)
      }
      updateName(data.name)
  };


  const alert = (values)=>{
    if(!values){
      Swal.fire({
        title: 'Invalid Your Input!',
        text: 'Please enter right key',
        icon: 'error',
        confirmButtonText: 'Ok'
      }) 

    }
  }


  const handleSaveUser = (saveUser) => {
    
     fetch('https://powerful-bayou-53286.herokuapp.com/saveUsers', {
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

  

  

    const handleGoolgeLogin = ()=>{
        googleSignin()
        .then((result) => {
            setUser(result.user);
            history.push(url)
            setIsLoading(true)
        }).catch((error) => {
        
        }).finally(()=>setIsLoading(false));
    }


    return (
        <div className="container">
            <div className="row my-2">
            <h2 className="text-center my-3">Register </h2>
            <div className="col-md-6">
              <div>
                <img className="w-100" src="https://wpeverest.com/blog/wp-content/uploads/2019/11/Best-Free-WordPress-Registration-Plugins.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6 bg-light text-center py-5">
              <div >
              
            <form onSubmit={handleSubmit(onSubmit)}>
            <input className=" w-50" {...register("name")} placeholder="name" type="text" required />
            <br/>
            <input className="my-2 w-50" {...register("email")}  placeholder="email" type="email" required />
            <br/>
            <input className=" w-50" {...register("password")} placeholder="password" type="password" required  />
            <br/>
            <input className="mt-2 w-50" {...register("password2")} placeholder="Confirm password" type="password" required />
            <br/>
            <input className="my-2 w-50" type="submit" />
    </form>
        <Button onClick={handleGoolgeLogin}>Google Sign in</Button>
              </div>
            </div>
            </div>
        </div>
    );
};

export default Register;