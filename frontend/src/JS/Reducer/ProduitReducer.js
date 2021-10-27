// eslint-disable-next-line
import{ PRODUCT_LIST,
  PRODUCT_LIST_SUCCESS,
   PRODUCT_LIST_FAIL  ,
  GET_PRODUCT_DETAILS_REQUEST ,
   GET_PRODUCT_DETAILS_SUCCESS,
   GET_PRODUCT_DETAILS_FAIL ,
   GET_PRODUCT_DETAILS_RESET ,
   PRODUCT_DELETE_REQUEST ,
   PRODUCT_DELETE_SUCCESS ,
   PRODUCT_DELETE_FAIL ,
   PRODUCT_SAVE_REQUEST ,
   PRODUCT_SAVE_SUCCESS ,
   PRODUCT_SAVE_FAIL
  } from "../constant/productConstants"

export const ProduitReducer=(state={produits:[]},action)=>{
    switch(action.type){
        case PRODUCT_LIST:
            return{
                ...state,
                loading:true,
                 produits:[]
                }
        case PRODUCT_LIST_SUCCESS:
            return{
                ...state,
                loading:false,
                produits:action.payload
            }
        case PRODUCT_LIST_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}

export const ProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case GET_PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_PRODUCT_DETAILS_RESET:
      return {
         ...state,
        product: {},
      };
    default:
      return state;
  }
};


export const  productDeleteReducer =(state={product:{}},action)=>{
  switch(action.type){
      case PRODUCT_DELETE_REQUEST:
          return{
            ...state,
            loading:true};
      case PRODUCT_DELETE_SUCCESS:
          return{
            ...state,
            loading:false,
            product:action.payload,
             success: true};
      case PRODUCT_DELETE_FAIL:
          return{
            ...state,
            loading:false
            ,error:action.payload}
      default:
          return state;
  }
}

export const productSaveReducer=(state={product:{}},action)=>{
  switch(action.type){
      case PRODUCT_SAVE_REQUEST:
          return{
            ...state ,
            loading:true};
      case PRODUCT_SAVE_SUCCESS:
          return{
            ...state ,
            loading:false,
            success:true,
            product:action.payload};
      case PRODUCT_SAVE_FAIL:
          return{
            loading:false,
            error:action.payload}
      default:
          return state;
  }
}