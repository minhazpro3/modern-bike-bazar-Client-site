import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit =(data) =>{
        
        fetch("http://localhost:5000/madeAdmin", {
            method: "PUT" ,
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
           
        })

    }
    return (
        <div className="bg-light text-center">
             <h3 className="text-center py-3 ">Create Admin</h3>
                <div className="pb-5">
                   
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                    className="w-25"
                    name="email"
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                    />
                    <br />

                    <input
                    className="submit-btn btn px-2 w-25 btn-danger mt-3"
                    type="submit"
                    value="Create Admin"
                    />
                </form>
                </div>
        </div>
    );
};

export default MakeAdmin;