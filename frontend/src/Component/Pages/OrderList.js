import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, getOrders , getOrder  } from '../../JS/action/orderActions';
import { Button, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
//import CloseIcon from '@material-ui/icons/Close'
import Message from './Message'



import { Link } from 'react-router-dom';
//import { getUsers } from '../../JS/actions/userActions';
import '../../App.css'

const OrderList=({history})=> {
    
  const orderList = useSelector((state) => state.orderReducer);
  const { loading, error, orders } = orderList;
  const orderDelete = useSelector((state) => state.orderReducer);
  const {
    
    success: successDelete,
  } = orderDelete;

 
  
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getOrders( ));
  }, [dispatch, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteOrder(id));
    }
  };
   
 
  return (
    <>
        <h1>Orders</h1>
        {loading ? <LinearProgress/> : error ? <Message severity='error'>{error}</Message> : (
            <TableContainer>
                <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>ID</strong></TableCell>
                                <TableCell><strong>USER</strong></TableCell>
                                <TableCell><strong>DATE</strong></TableCell>
                                <TableCell><strong>TOTAL</strong></TableCell>
                                <TableCell><strong>PAID</strong></TableCell>
                                <TableCell><strong>DELIVERED</strong></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order._id}>
                                    <TableCell>{order._id}</TableCell>
                                    <TableCell>{order.shippingAddress.fullName}</TableCell>
                                    <TableCell>{order.createdAt.substring(0, 10)}</TableCell>
                                    <TableCell>${order.totalPrice}</TableCell>
                                    <TableCell>{order.isPaid ? 'Yes' : 'No'}</TableCell>
                                    <TableCell> {order.isDelivered ? 'Yes': 'No'}</TableCell>
                                    <TableCell> </TableCell>
                                    <TableCell>
                                            <Link to={`/order/${order._id}`} className='linkStyle'>
                                                <Button variant='contained' style={{ backgroundColor: '#393836', color: '#fff'}}
                                                 onClick={()=>dispatch(getOrder(order._id))}>Details</Button>
                                            </Link>
                                            <Button variant='contained' style={{ backgroundColor: '#393836', color: '#fff'}}
                                             onClick={() => deleteHandler(order._id)}>Delete</Button>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                </Table>
            </TableContainer>
        )}  
    </>
)
}

export default OrderList