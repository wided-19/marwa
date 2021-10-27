import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, listUsers } from '../../JS/action/userAction'
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
//import EditIcon from '@material-ui/icons/Edit'
//import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
import { Spinner } from 'react-bootstrap'

const UserListe = ({ history }) => {
    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const { loading, error, users } = userList

   // const userLogin = useSelector(state => state.userLogin)
   // const { userInfo } = userLogin

    const userDelete = useSelector(state => state.userDelete)
    const { success: successDelete } = userDelete

    useEffect(() => {
       
            dispatch(listUsers())
       

    }, [dispatch, history, successDelete])

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure to delete ?')){
            dispatch(deleteUser(id))
        }
    }
    return (
        <>
            <h1>Users</h1>
            {loading ?  <Spinner animation="grow" variant="primary" /> : error ? {error}: (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>ID</strong></TableCell>
                                <TableCell><strong>First_NAME</strong></TableCell>
                                <TableCell><strong>Last_NAME</strong></TableCell>
                                <TableCell><strong>DATE_OF_BRITH</strong></TableCell>
                                <TableCell><strong>EMAIL</strong></TableCell>
                                <TableCell><strong>PHONE</strong></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map(user => (
                                <TableRow key={user._id}>
                                    <TableCell>{user._id}</TableCell>
                                    <TableCell>{user.first_name}</TableCell>
                                    <TableCell>{user.last_name}</TableCell>
                                    <TableCell>{user.dateofBrith}</TableCell>
                                    <TableCell><a className='linkStyle' href={`mailto:${user.email}`}>{user.email}</a></TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    
                                    <TableCell>
                                            
                                            <IconButton onClick={() => deleteHandler(user._id)}>
                                                <DeleteIcon/>
                                            </IconButton>
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

export default UserListe