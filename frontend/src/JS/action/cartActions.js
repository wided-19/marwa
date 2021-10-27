import {
  ADD_TO_CART ,CART_REMOVE_ITEM
    ,CART_SAVE_SHIPPING_ADDRESS  
 } from "../constant/cartConstants";
 import axios from "axios";
 
 export const addToCart = (id, qty) => async (dispatch, getState) => {
   const result = await axios.get(`/api/auths/produit/${id}`);
 
   dispatch({
     type: ADD_TO_CART,
     payload: {
       product:result.data.response._id,
      image:result.data.response.image,
       title:result.data.response.title,
       price:result.data.response.price,
       countInStock:result.data.countInStock,
       qty,
     },
   });
 // save cart localStorage
   localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
 };
 
 //Remove from the cart
 export const removeFromCart = (id) => async (dispatch, getState) => {
   dispatch({
     type: CART_REMOVE_ITEM,
     payload: id,
   });
 
   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
 }
 
 export const saveShippingAddress = (data) => (dispatch) => {
   dispatch({ 
     type: CART_SAVE_SHIPPING_ADDRESS, 
     payload: data 
   })
 
   localStorage.setItem('shippingAddress', JSON.stringify(data));
 }
 
 // export const savePaymentMethod = (data) => (dispatch) => {
 //   dispatch({ 
 //     type: CART_SAVE_PAYMENT_METHOD, 
 //     payload: data 
 //   })
 //   localStorage.getItem('paymentMethod', JSON.stringify(data))
 // };