import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AddProducts from './Component/AddProducts/AddProducts';
import Admin from './Component/Admin/Admin';
import AllComments from './Component/AllComments/AllComments';
import AuthProvider from './Component/AuthProvider/AuthProvider';
import Dashboard from './Component/Dashboard/Dashboard';
import Footer from './Component/Footer/Footer';
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import ManageProducts from './Component/MagageProducts/ManageProducts';
import MakeAdmin from './Component/MakeAdmin/MakeAdmin';
import ManageOrders from './Component/ManageOrders/ManageOrders';
import MoreProducts from './Component/MoreProducts/MoreProducts';
import MyOrders from './Component/MyOrders/MyOrders';
import Pay from './Component/Payment/Pay';
import Payment from './Component/Payment/Payment';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Register from './Component/Register/Register';
import ReviewInput from './Component/ReviewInput/ReviewInput';
import NavigationBar from './Component/NavigationBar/NavigationBar';


function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Router>
     <NavigationBar/>
       <Routes>
       <Route  path="/" element={<Home/>}>
           
         </Route>
       <Route  path="/home" element={<Home/>}>
           
         </Route>
         
         <Route  path="/login" element={ <Login/>}>
          
         </Route>

         <Route  path="/placeOrder/:orderId" element={<PrivateRoute> <PlaceOrder/></PrivateRoute>
         }>
         </Route>
        /

         <Route  path="/moreProducts" element={ <PrivateRoute> <MoreProducts/></PrivateRoute>}>
         </Route>

         <Route  path="/register" element={  <Register/> }>
         </Route>

         <Route  path="/addProducts" element={  <PrivateRoute><AddProducts/></PrivateRoute>}>
         </Route>

         
{/* useLate start */}
         <Route  path="/dashboard" element={ <PrivateRoute><Dashboard/></PrivateRoute>}>
         <Route  path="/dashboard/*" element={ <Payment/>}>
           
           </Route>
           <Route  path={`/dashboard`} element={ <MyOrders/>}>
          
           </Route>
           <Route  path={`/dashboard/myOrder`} element={ <MyOrders/>}>
          
           </Route>
 
           <Route path={`/dashboard/review`} element={  <ReviewInput/>}>
          
           </Route>
           <Route path={`/dashboard/payment`} element={<Payment/>}>
          
           </Route>
 
           <Route path={`/dashboard/admin`} element={<Admin/>}>
         
           </Route>
           <Route  path={`/dashboard/addProduct`} element={ <AddProducts/>}>
          
          </Route>
           <Route  path={`/dashboard/manageProducts`} element={ <ManageProducts/>}>
          </Route>

           <Route  path={`/dashboard/manageOrders`} element={ <ManageOrders/>}>
          </Route>

           <Route  path={`/dashboard/manageComments`} element={ <AllComments/>}>
          </Route>

           <Route  path={`/dashboard/makeAdmin`} element={ <MakeAdmin/>}>
          </Route>

           <Route  path={`/dashboard/pay/:findId`} element={ <Pay/>}>
          </Route>
         </Route>


{/* useLate end */}


         <Route  path="/review" element={<PrivateRoute> <ReviewInput/></PrivateRoute>}>
         </Route>

         <Route  path="/payment" element={<PrivateRoute>  <Payment/></PrivateRoute>} >
         </Route>

         <Route  path="/manageProducts" element={<PrivateRoute><ManageProducts/></PrivateRoute>}>
           
         </Route>
         <Route  path="/manageOrders" element={ <PrivateRoute><ManageOrders/></PrivateRoute>}>
          
         </Route>
         
       </Routes>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;


