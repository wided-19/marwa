import React from 'react'
import {useSelector} from 'react-redux'
import {Route} from 'react-router-dom'
import NotAuth from '../Pages/NotAuth'
const PrivateRoute = ({component: Component, ...rest}) => {
    const isAuth = useSelector(state => state.AuthReducer.isAuth)
if (isAuth===true){
    return <Route component={Component}{...rest}/>
}
    return <NotAuth/>
}
export default PrivateRoute
