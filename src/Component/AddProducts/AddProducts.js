import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddProducts = () => {
    const { register, handleSubmit,reset  } = useForm();
    const onSubmit = data => {
       fetch('https://powerful-bayou-53286.herokuapp.com/addProducts', {
           method: "POST",
           headers: {
               "content-type": "application/json"
           },
           body:JSON.stringify(data)
       }).then(res=>res.json())
       .then(data=>{
        warning(true)
        reset()
       })
    }

    const warning = (alert) =>{
        if(alert){
            Swal.fire({
                title: 'Product Added Successfully!!',
                text: 'Thank You So Much',
                icon: 'success',
                confirmButtonText: 'Ok'
              }) 
        }
    }
    return (
        <div className="container py-5">
            <div className="row">
                <h3 className="text-center pb-3">ADD PRODUCT</h3>
            <div className="col-md-6">
                <img style={{width: '100%'}} src="https://wpklik.com/wp-content/uploads/2018/12/How-to-Properly-Add-Products-in-WooCommerce.jpg" alt="" />
            </div>
            <div className="col-md-6">
            <div className="bg-light text-center py-5">
                <form onSubmit={handleSubmit(onSubmit)}>

                <input className=" my-2 w-50 px-2" {...register("title")} defaultValue="" type="text" placeholder="Title" required />

                <br/>
                <input className=" mb-2 w-50 px-2" {...register("regularPrice" )} defaultValue="" type="text" placeholder="Regular Price" required />

                <br/>
                <input className=" w-50 px-2 " type="text" {...register("offerPrice")} placeholder="Offer Price " required />

                <br/>
                <input className=" w-50 px-2 mt-2" type="text" {...register("link")} placeholder="Img Link " required />
                <br/>

                <input className=" w-50 px-2 my-2 " type="text" {...register("description")} placeholder="description " required />
                <br/>
               
                <input className="bg-danger border-0 w-50 px-2 py-1 text-white rounded my-2" type="submit" value="Add"  />  
                
                </form>
            </div>
            </div>
            </div>
        </div>
    );
};

export default AddProducts;