import{ ADD_TO_CART ,REMOVE_FROM_CART  ,CART_RESET ,CART_EMPTY,
  CART_SAVE_SHIPPING_ADDRESS}from "../constant/cartConstants";
 
 const CART_INITIAL_STATE = {
   cartItems: [],
   shippingAddress:{}
 };
 
 export const cartReducers = (state = CART_INITIAL_STATE, action) => {
   switch (action.type) {
     case ADD_TO_CART:
       const item = action.payload;
 
       const existItem = state.cartItems.find((x) => x.product === item.product);
 
       if (existItem) {
         return {
           ...state,
           cartItems: state.cartItems.map((x) =>
             x.product === existItem.product ? item : x
           ),
         };
       } else {
         return {
           ...state,
           cartItems: [...state.cartItems, item],
         };
       }
     case REMOVE_FROM_CART:
       return {
         ...state,
         cartItems: state.cartItems.filter((x) => x.product !== action.payload),
       };
 
       case CART_RESET :
         return {
             ...state,
             isLoading: false,
             cartItems: [],
             shippingAddress: {},
             paymentMethod: ''
         }
     case CART_EMPTY:
         return {
             ...state,
             isLoading: false,
             cartItems: []
         }
       case CART_SAVE_SHIPPING_ADDRESS:
         return{
           ...state,
           shippingAddress:action.payload}
 //case actionTypes.CART_SAVE_PAYMENT:
           //  return{
            //   ...state,
              // payment:action.payload}
 
     default:
       return state;
   }
 };