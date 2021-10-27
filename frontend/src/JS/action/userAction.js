
import axios from "axios"

import{
    USER_DETAILS_SUCCESS , USER_DETAILS_FAIL  ,USER_UPDATE_PROFILE_SUCCESS
   ,USER_UPDATE_PROFILE_FAIL , USER_LIST_SUCCESS ,USER_LIST_FAIL 
 ,USER_DELETE_SUCCESS ,USER_DELETE_FAIL  , USER_UPDATE_SUCCESS 
    ,USER_DETAILS_REQUEST

}from '../constant/userConstants'


export const getUserDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST })

        //headers
       const config ={
        headers : {
            'x-auth-token':localStorage.getItem('token')
        }
    }

        const result = await axios.get(`/api/user/${id}`, config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: result.data.response
        })
        
    } catch (error) {
        console.dir(error)
        dispatch({type: USER_DETAILS_FAIL})
        
    }
} 

export const updateUserProfile = (id ,user) => async (dispatch) => {
    try {
       

        //headers
       const config ={
        headers : {
            'x-auth-token':localStorage.getItem('token')
        }
    }

        const { result } = await axios.put(`/api/user/${id}`,user , config)

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: result.data.response
        })
        
    } catch (error) {
        console.dir(error)
        dispatch({type: USER_UPDATE_PROFILE_FAIL})
        
    }
} 



export const listUsers = () => async (dispatch) => {
    try {
        

        //headers
       const config ={
        headers : {
            'x-auth-token':localStorage.getItem('token')
        }
    }

        const result = await axios.get(`/api/user/user`, config)

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: result.data.response
        })
    }
    catch (error) {
        console.dir(error)
        dispatch({type: USER_LIST_FAIL})
        
    }
} 
    


export const deleteUser = (id) => async (dispatch) => {
    try {
      

      //headers
      const config ={
        headers : {
            'x-auth-token':localStorage.getItem('token')
        }
    }

        await axios.delete(`/api/user/${id}`, config)

        dispatch({ type: USER_DELETE_SUCCESS })
    } 
    catch (error) {
        console.dir(error)
        dispatch({type: USER_DELETE_FAIL})
        
    }
} 
    
   

export const updateUser = (id) => async (dispatch) => {
    try {
       
       //headers
       const config ={
        headers : {
            'x-auth-token':localStorage.getItem('token')
        }
    }

        const result = await axios.put(`/api/user/${id}`, config)

        dispatch({ type: USER_UPDATE_SUCCESS })

        dispatch({ 
            type: USER_DETAILS_SUCCESS, 
            payload: result.data.response
        })

    } catch (error) {
        console.dir(error)
        dispatch({type: USER_DELETE_FAIL})
        
    }
} 

