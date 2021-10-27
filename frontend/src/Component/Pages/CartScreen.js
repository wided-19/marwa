import "./CartScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

// Components
import CartItem from "../Pages/CartItem";

// Actions
import { addToCart, removeFromCart } from "../../JS/action/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {isAuth }   = useSelector(state => state.AuthReducer)

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const checkoutHandler=()=>{
    history.push("/shipping")
}


 


  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>

          {
            isAuth?(    
          <Button variant="primary"onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length===0}>
          Proceed to checkout</Button>
            
              ):(
                <div>

        <Button variant="primary" className="button primary full-width" 
        disabled={cartItems.length===0}>
          Proceed to checkout</Button>
          <span>
          connect to you to complete the next steps

          </span>

          </div>
              )
          }

         
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;