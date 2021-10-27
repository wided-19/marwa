// eslint-disable-next-line
import { Box, Button, Grid, InputLabel, LinearProgress, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core'
import{Card} from 'react-bootstrap'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { getUserDetails, updateUserProfile } from '../../JS/action/userAction'
//import { getMyOrders } from '../../JS/action/orderActions'
//import Message from './Message'
//import CloseIcon from '@material-ui/icons/Close'
//import { Link } from 'react-router-dom'
//import { USER_UPDATE_PROFILE_RESET } from '../../JS/constant/userConstants'

// const useStyles = makeStyles(theme => ({
//     textfield: {
//         marginTop: theme.spacing(1),
//         marginBottom: theme.spacing(1)
//     }
// }))

const Profile = ({ location, history }) => {
   
     

    const dispatch = useDispatch()

    const { user}   = useSelector(state => state.AuthReducer)

    

    // const  getMyOrders = useSelector(state => state.orderReducer)
    // const { loading, error, orders } = getMyOrders;
  

    useEffect(() => {
      
    }, [dispatch])

    

    return (
        <Grid container spacing={2}>
            
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="data:image/jpeg;base64,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" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>First Name :{user.first_name}</Card.Text>
    <Card.Text>Last Name: { user.last_name}</Card.Text>
    <Card.Text>Date of Brith:{user.dateofBrith}</Card.Text>
    <Card.Text>Email:{user.email}</Card.Text>
    <Card.Text>Phone :{user.phone}</Card.Text>

  </Card.Body>
  
  
</Card>
            {/* <Grid item xs={12} md={9}>
                <h2>My Orders</h2>
                {loading ? <LinearProgress/> : error ? <Message severity='error'>{error}</Message> : (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>ID</strong></TableCell>
                                    <TableCell><strong>DATE</strong></TableCell>
                                    <TableCell><strong>TOTAL</strong></TableCell>
                                    <TableCell><strong>PAID</strong></TableCell>
                                    <TableCell><strong>DELIVERED</strong></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map(order => (
                                    <TableRow key={order._id}>
                                        <TableCell>{order._id}</TableCell>
                                        <TableCell>{order.createdAt.substring(0, 10)}</TableCell>
                                        <TableCell>{order.totalPrice}</TableCell>
                                        <TableCell>{order.isPaid ? order.paidAt.substring(0,10) : <CloseIcon style={{color:'red'}}/>}</TableCell>
                                        <TableCell>{order.isDelivered ? order.deliveredAt.substring(0,10) : <CloseIcon style={{color:'red'}}/>}</TableCell>
                                        <TableCell>
                                            <Link className='linkStyle' to={`/order/${order._id}`}>
                                                <Button variant='contained' style={{ backgroundColor: '#393836', color: '#fff'}}>Details</Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table> 
                    </TableContainer>
                )}
            </Grid> */}
        </Grid>
    )
}

export default Profile