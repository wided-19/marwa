import React from 'react';
import './CheckoutStatusBar.css'


function CheckoutSteps(props){
    return <div className="checkout-steps">
        <div className={props.step1?'active':''}>Signin</div>
        <div className={props.step2?'active':''}>Shopping</div>
        <div className={props.step3?'active':''}>Place Order</div>

        </div>
}
export default CheckoutSteps;

