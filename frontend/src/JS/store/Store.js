import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


// Reducers 
import AuthReducer from "../Reducer/AuthReducer"
import { cartReducers } from "../Reducer/cartReducers";
import {
  ProduitReducer,
  ProductDetailsReducer,
  productSaveReducer,
  productDeleteReducer,
  
} from "../Reducer/ProduitReducer";
import {userDetailsReducer , 
  userUpdateProfileReducer,
   userListReducer ,
   userDeleteReducer,
  userUpdateReducer} from "../Reducer/UserReducer"

import {
 /* orderCreateReducer,
  orderDeleteReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListReducer,
  orderMineListReducer,
  orderPayReducer,
  orderSummaryReducer,*/
  orderReducer
} from "../Reducer/orderReducer"


const reducer = combineReducers({
  AuthReducer,
  cart: cartReducers
  ,ProduitReducer,
  ProductDetailsReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
 /* orderCreateReducer,
    orderDeleteReducer,
    orderDeliverReducer,
    orderDetailsReducer,
    orderListReducer,
    orderMineListReducer,

    orderPayReducer,
    orderSummaryReducer,*/
    orderReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
});

const middleware = [thunk];
const initialState = {
 cart: {
      cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
      shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
      // paymentMethod: localStorage.getItem('paymentMethod')
      // ? JSON.parse(localStorage.getItem('paymentMethod'))
      // : {},
  }
}
/*
const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {},
  },
};
*/
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
