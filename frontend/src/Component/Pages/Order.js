import { Box, Card, Divider, Grid, LinearProgress, List, ListItem } from '@material-ui/core'


import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
//import { updateOrder } from '../../JS/action/orderActions'

const Order = ({ match, history }) => {
   

    

    const orderDetails = useSelector(state => state.orderReducer)
    const { order, loading, error } = orderDetails

    //const user= useSelector(state => state.AuthReducer.user)
    

    

   

    // const successPaymentHandler = () => {
    //     dispatch(updateOrder(order._id))
    // }

    return (
        loading ? <LinearProgress/> : error ? {error} : 
        <>
            <h1> Order {order._id}</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <List>
                        <ListItem>
                            <Box component='div' style={{width: '100%'}} >
                                <h2>Shipping</h2>
                                <p><strong>Name: </strong>{ order.shippingAddress.fullName}</p>
                                
                                <p>
                                    <strong>Address: </strong>
                                    {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}
                                </p>
                                    <p>
                                    <strong>Phone: </strong>
                                    {order.shippingAddress.phone}
                                    </p>
   
                            </Box>
                        </ListItem>
                        <Divider/>

                        <ListItem>
                            <Box component='div' style={{width: '100%'}} >
                                <h2>Payment Method</h2>
                                <p>
                                    <strong>Method: </strong>
                                    {order.paymentMethod}
                                </p>
                                
                            </Box>
                        </ListItem>
                        <Divider/>

                        <ListItem>
                            <Box component='div'>
                                <h2>Order Items</h2>
                                {order.orderItems.length === 0 ? (
                                    <p>Order is empty</p>
                                ) : (
                                    <List>
                                        {order.orderItems.map((item, index) => (
                                            <ListItem key={index}>
                                                <Grid container spacing={2}>
                                                    <Grid item md={1}>
                                                        <img src={item.image} alt={item.title} width='100%' height='auto' />
                                                    </Grid>
                                                    <Grid item md>
                                                        <Link to={`/product/${item.product}`} className='linkStyle'>
                                                            {item.name}
                                                        </Link>
                                                    </Grid>
                                                    <Grid item md={4}>
                                                        {item.qty} xTND{item.price} = TND{item.qty * item.price}
                                                    </Grid>
                                                </Grid>
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </Box>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <List>
                            <ListItem>
                                <h2>Order Summary</h2>
                            </ListItem>
                            <Divider/>

                            <ListItem>
                                <Grid container spacing={2}>
                                    <Grid item xs>Items</Grid>
                                    <Grid item xs>TND{order.itemsPrice}</Grid>
                                </Grid>
                            </ListItem>

                            <ListItem>
                                <Grid container spacing={2}>
                                    <Grid item xs>Shipping</Grid>
                                    <Grid item xs>TND{order.shippingPrice}</Grid>
                                </Grid>
                            </ListItem>

                            <ListItem>
                                <Grid container spacing={2}>
                                    <Grid item xs>Tax</Grid>
                                    <Grid item xs>TND{order.taxPrice}</Grid>
                                </Grid>
                            </ListItem>

                            <ListItem>
                                <Grid container spacing={2}>
                                    <Grid item xs>Total</Grid>
                                    <Grid item xs>TND{order.totalPrice}</Grid>
                                </Grid>
                            </ListItem>

                           
                     

                        </List>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Order