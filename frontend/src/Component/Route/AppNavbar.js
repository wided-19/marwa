import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Login from '../Auth/Login'
import Register from '../Auth/Register';
import {useSelector} from 'react-redux';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../JS/action/AuthAction';
import {ButtonGroup , DropdownButton ,Dropdown} from 'react-bootstrap'
import "./../Route/AppNavbar.css"


const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppNavbar({click}) {

  const dispatch = useDispatch()
  const {isAuth , user}   = useSelector(state => state.AuthReducer)
  const classes = useStyles();

  const logout=()=>{
  dispatch(logoutUser())
  }
  const cartItems = useSelector((state) => state.cart);
 
  const getCartCount = () => {
   // cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    
     return cartItems.length 
    
}

  return (
    <div className={classes.root} >
      <AppBar position="static">
        <Toolbar style={{backgroundColor:"#212529" }}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
        <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            
            <span>
            Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      
          </Typography>
        
        
          {user === null ? (
                <div>
   <Register />
                   <Login />
                </div>
              ):

            isAuth &&user.role==="admin"?(
           
                
              <div >
            
            
            <span>Welcome:{user.first_name}</span>
        
  {[ 'Info'].map(
    (variant) => (
      <DropdownButton
        as={ButtonGroup}
        key={variant}
        id={`dropdown-variants-${variant}`}
        variant={variant.toLowerCase()}
        title={variant}
      >
        <Dropdown.Item eventKey="1"> <Link to="/Manager_Products"> Manager_Products </Link></Dropdown.Item>
        <Dropdown.Item eventKey="2"><Link to='/admin/userlist'> Manager_users </Link></Dropdown.Item>
        <Dropdown.Item eventKey="3" >
        <Link to="/orderlist"> OrderList </Link>
        </Dropdown.Item>
        <Dropdown.Item eventKey="4" >
        <Link to="/history"> OrderHistory </Link>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4"><span onClick={logout}>  Logout</span></Dropdown.Item>
      </DropdownButton>
    )
    )}

   

            </div>
            
              ) : user.role==="user" ?(

                <div>
<span>Welcome:{user.first_name}</span>
<Link to='/history'>Profile </Link>
<span onClick={logout}>  logout</span>
                
                </div>
              )  : (
                <>
                </>
              )
         
             

              }

        </Toolbar>
      </AppBar>
    </div>
  );
}