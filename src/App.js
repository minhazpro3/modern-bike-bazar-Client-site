import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddProducts from './Component/AddProducts/AddProducts';
import Admin from './Component/Admin/Admin';
import AuthProvider from './Component/AuthProvider/AuthProvider';
import Dashboard from './Component/Dashboard/Dashboard';
import Footer from './Component/Footer/Footer';
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import ManageProducts from './Component/MagageProducts/ManageProducts';
import ManageOrders from './Component/ManageOrders/ManageOrders';
import MoreProducts from './Component/MoreProducts/MoreProducts';
import MyOrders from './Component/MyOrders/MyOrders';
import NavigationBar from "./Component/NavigationBar/NavigationBar";
import Payment from './Component/Payment/Payment';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Register from './Component/Register/Register';
import ReviewInput from './Component/ReviewInput/ReviewInput';


function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Router>
       <NavigationBar></NavigationBar>
       <Switch>
       <Route exact path="/">
           <Home></Home>
         </Route>
         <Route  path="/home">
           <Home></Home>
         </Route>
         <Route  path="/login">
           <Login></Login>
         </Route>
         
         <PrivateRoute  path="/admin">
           <Admin></Admin>
         </PrivateRoute>
         <PrivateRoute  path="/myOrders">
           <MyOrders></MyOrders>
         </PrivateRoute>
         <PrivateRoute  path="/placeOrder/:orderId">
          <PlaceOrder></PlaceOrder>
         </PrivateRoute>
         <Route  path="/moreProducts">
          <MoreProducts></MoreProducts>
         </Route>
         <Route  path="/register">
           <Register></Register>
         </Route>
         <PrivateRoute  path="/addProducts">
           <AddProducts></AddProducts>
         </PrivateRoute>
         <PrivateRoute  path="/dashboard">
           <Dashboard></Dashboard>
         </PrivateRoute>
         <PrivateRoute  path="/review">
           <ReviewInput></ReviewInput>
         </PrivateRoute>
         <PrivateRoute  path="/payment">
           <Payment></Payment>
         </PrivateRoute>
         <PrivateRoute  path="/manageProducts">
           <ManageProducts></ManageProducts>
         </PrivateRoute>
         <PrivateRoute  path="/manageOrders">
           <ManageOrders></ManageOrders>
         </PrivateRoute>
         
       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;


