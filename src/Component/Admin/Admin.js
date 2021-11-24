import React from 'react';
import useAuth from '../Hooks/useAuth';

const Admin = () => {
  const {user,logOut}=useAuth()

    
    return (
        <div>

            <h2>hello kacha morich</h2>
            {/* <div className="row">
            <div className="col-md-2">
            <Card className="mx-2 bg-light pt-3 text-center" style={{height: '550px'}}>
           <h5 className="mb-3">Dashboard</h5>
            <h6 className="my-3"><Link to="/home" style={{color: 'hotpink'}} className="text-decoration-none fw-bold ">HOME</Link></h6>

            <h6 className="my-3"><Link to="/dashboard" style={{color: 'hotpink'}} className="text-decoration-none fw-bold">DASHBOARD</Link></h6>

            <h6 className="my-3">  <Link to="/addProducts" style={{color: 'hotpink'}} className="text-decoration-none  fw-bold">ADD PRODUCTS</Link></h6>

           <h6 className="my-3"> <Link to="/manageProducts" style={{color: 'hotpink'}} className="text-decoration-none fw-bold">MANAGE PRODUCTS</Link></h6>

           <h6 className="my-3"> <Link to="/manageOrders" style={{color: 'hotpink'}} className="text-decoration-none fw-bold">MANAGE ORDERS</Link></h6>

           <h6 className="my-3"> <Link to={`${url}/makeAdmin`} style={{color: 'hotpink'}} className="text-decoration-none fw-bold">MAKE AN ADMIN</Link></h6>
           
           <h6 className="my-3"><Button onClick={logOut} style={{color: 'hotpink'}} className="text-decoration-none bg-white border-0 fw-bold">LOGOUT</Button></h6>
            </Card>
            </div>
            <div className="col-md-10">
            <Routes>
        <Route exact path={path}>
          choose any one
        </Route>
        <Route path={`${path}/:makeAdmin`}>
         <MakeAdmin></MakeAdmin>
        </Route>
       
      </Routes>
            </div>
            </div> */}
        </div>
    );
};

export default Admin;