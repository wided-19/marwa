import{
    USER_DETAILS_SUCCESS , USER_DETAILS_FAIL ,USER_DETAILS_RESET ,USER_UPDATE_PROFILE_SUCCESS
   ,USER_UPDATE_PROFILE_FAIL ,USER_UPDATE_PROFILE_RESET , USER_LIST_SUCCESS ,USER_LIST_FAIL 
 ,USER_LIST_RESET ,USER_DELETE_SUCCESS ,USER_DELETE_FAIL  , USER_UPDATE_SUCCESS , USER_UPDATE_FAIL 
   , USER_UPDATE_RESET ,USER_DETAILS_REQUEST

}from '../constant/userConstants'

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return  {
                 ...state, 
                 loading: true }
        
        case USER_DETAILS_SUCCESS:
            return {
                ...state, 
                 loading: false, 
                 user: action.payload }

        case USER_DETAILS_FAIL:
            return { 
                ...state, 
                loading: false,
                 error: action.payload }

        case USER_DETAILS_RESET:
            return { 
                ...state,
                user: {} }

        default:
            return state
    }
}

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        
        
        case USER_UPDATE_PROFILE_SUCCESS:
            return { 
                ...state, 
                loading: false, 
                userInfo: action.payload, 
                success: true }

        case USER_UPDATE_PROFILE_FAIL:
            return { 
                ...state, 
                loading: false,
                 error: action.payload }

        case USER_UPDATE_PROFILE_RESET:
            return {}

        default:
            return state
    }
}

export const userListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
       
        
        case USER_LIST_SUCCESS:
            return {
                ...state, 
                 loading: false, 
                 users: action.payload }

        case USER_LIST_FAIL:
            return { 
                ...state, 
                loading: false,
                 error: action.payload }

        case USER_LIST_RESET:
            return { 
                ...state, 
                users: [] }

        default:
            return state
    }
}

export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      
        
        case USER_DELETE_SUCCESS:
            return { 
                loading: false,
                 success: true }

        case USER_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const userUpdateReducer = (state = { user: {} }, action) => {
    switch (action.type) {
    
        
        case USER_UPDATE_SUCCESS:
            localStorage.setItem('userInfo')

            return { 

                ...state, 
                loading: false,
                 success: true }

        case USER_UPDATE_FAIL:
            return {
                ...state, 
                 loading: false,
                  error: action.payload }

        case USER_UPDATE_RESET:
            return {
                ...state, 
                 user: {} }

        default:
            return state
    }
}