
import React from 'react'
import { useDispatch } from 'react-redux';
import AppNavbar from './Component/Route/AppNavbar.js'
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import { useEffect } from 'react'
import Home from './Component/Pages/Home';
//import Dashboard from './Component/Pages/Manager_Products';
import PrivateRoute from './Component/Routes/PrivateRoute';
import ProduitDetail from './Component/Pages/ProduitDetail';
import CartScreen from './Component/Pages/CartScreen';
import Shipping from './Component/FollowPages/Shopping';
import PlaceOrder from './Component/FollowPages/PlaceOrder';
import {getAuthUser} from "./JS/action/AuthAction"
import UserListe from './Component/Pages/UserListe';
import Footer from './Component/Pages/Footer';
import Manager_Products from './Component/Pages/Manager_Products';
import Order from './Component/Pages/Order';
import OrderList from './Component/Pages/OrderList';
import Profile from './Component/Pages/Profile';
import edit from './Component/Pages/edit';


function App() {
  const dispatch = useDispatch()
  const getUser = () => dispatch(getAuthUser())


  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  },[])

  return (
    <>
    <div className="App">
       <Router>
         
        <AppNavbar  />
        
     <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/produit/:id" component={ProduitDetail} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/shipping" component={Shipping}/>
          <Route exact path="/placeorder" component={PlaceOrder}/>
          <Route exact path="/order/:id" component={Order} />
          <PrivateRoute exact path="/Manager_Products" component={Manager_Products}/>
          <Route  exact path='/admin/userlist' component={UserListe} />
          <Route exact path="/orderlist" component={OrderList} />
          <Route exact path="/history" component={Profile} />
          <Route exact path='/admin/user/:id/edit' component={edit} />

     </Switch>
   
     </Router>

     <Footer/>
    </div>
    </>
  );
  
}

export default App;

