import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products,setProducts]=useState([]);
    const [refreshData, setRefreshData]=useState(false)

    useEffect(()=>{
        fetch('https://powerful-bayou-53286.herokuapp.com/manageProducts')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
        })
    },[refreshData])

    const handleDelete = (id) => {
        const process =window.confirm('are you sure? for delete ') 
        if(process){
            fetch(`https://powerful-bayou-53286.herokuapp.com/manProduct/${id}`, {
            method: "DELETE", 
            headers: {
                "content-type": "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setRefreshData(data)
        })
        }
        
    }

    return (
        <div>
            <h2 className="text-center">Products Management</h2>
            <div>
            <table className="table table-hover ">
  <thead>
    <tr>
      <th scope="col">SL</th>
      <th scope="col">Name</th>
      <th scope="col">Regular Price</th>
      <th scope="col">Offer Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  

  {
  products.map((info,index)  => 
   
    <tbody className="my-1" key={info._id}>
    <tr>
      <td>{(index+1)}</td>
      <td>{info?.title}</td>
      <td>$ <del>{info?.regularPrice}</del></td>
      <td>$ {info?.offerPrice}</td>
      <td><input onClick={()=>handleDelete(info?._id)} className="bg-danger p-2 text-white border-0 rounded " type="button" value="Delete" /></td>
    </tr> 
  </tbody>
  )
}

  
</table>
            </div>
        </div>
    );
};

export default ManageProducts;