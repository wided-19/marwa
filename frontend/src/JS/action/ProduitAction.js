import axios from "axios"
import{  
  PRODUCT_LIST_SUCCESS,
   PRODUCT_LIST_FAIL  ,
  
   GET_PRODUCT_DETAILS_SUCCESS,
   GET_PRODUCT_DETAILS_FAIL ,
   GET_PRODUCT_DETAILS_RESET ,
 
   PRODUCT_DELETE_SUCCESS ,
   PRODUCT_DELETE_FAIL ,
   PRODUCT_SAVE_REQUEST ,
   PRODUCT_SAVE_SUCCESS ,
   PRODUCT_SAVE_FAIL
} from "../constant/productConstants"

export const  getProduit = ()=>async(dispatch)=>{
    try {
        const res =await axios.get('/api/products/produit')
        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload:res.data.response  
        })
    } catch (error) {
        console.dir(error)
        const {errors}=error.response.data
        if (Array.isArray(errors)){
            errors.forEach((err)=>alert(err.msg))
        }
       dispatch({type:PRODUCT_LIST_FAIL})
    }
}


export const getProductDetails = (id) => async (dispatch) => {
    try {
  
     const result = await axios.get(`/api/products/produit/${id}`);
  
      dispatch({
        type:GET_PRODUCT_DETAILS_SUCCESS,
        payload: result.data.response  
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const removeProductDetails = () => (dispatch) => {
    dispatch({ type: GET_PRODUCT_DETAILS_RESET });
  };




  export const saveProduct = (product) => async(dispatch, getState)=>{
    try{
        dispatch({type:PRODUCT_SAVE_REQUEST, payload:product});
       // const {userSignin:{userInfo}}=getState();
        if(!product._id){
            const res = await axios.post("api/products/produit",product
            
            );
            dispatch({type:PRODUCT_SAVE_SUCCESS, payload:res});
    
        } else{
            const res= await axios.put("api/products/produit/produit/"+product._id,product  );
            dispatch({type:PRODUCT_SAVE_SUCCESS, payload:res});
    
        }
       
    }catch(error){
        dispatch({type:PRODUCT_SAVE_FAIL,payload:error.message});
    }
}


export const deleteProduct = (id) => async(dispatch) => {
   
  try{
           //headers
  const config = {
    headers:{
        'auth-token': localStorage.getItem('token')
    }
}
      
      const res= await axios.delete(`api/products/produit/produit/${id}`,  config );
 
      dispatch({type:PRODUCT_DELETE_SUCCESS,payload:res,success:true});
  }catch(error){
      dispatch({type:PRODUCT_DELETE_FAIL,payload:error.message});
  }
}


