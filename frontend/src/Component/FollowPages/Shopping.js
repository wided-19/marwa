import React, { useState } from 'react';
//import {Link} from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import {saveShippingAddress} from '../../JS/action/cartActions';
import CheckoutSteps from './CheckoutSteps';
import {Card , Button ,Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';


const Shopping= () => {
  
  const cart = useSelector(state => state.cart)
  const { shippingAddress} = cart
 
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [phone, setPhone] = useState(shippingAddress.phone);

  const dispatch = useDispatch();
  const history = useHistory();
  

const submitHandler=(e)=>{
       e.preventDefault();
       dispatch(saveShippingAddress({fullName,address,city,postalCode,country ,phone}));
   history.push("/placeorder")
  
}
    return  <div>
        <CheckoutSteps step1 step2></CheckoutSteps>
        <div style={{display:"flex" , marginLeft: "350px" , justifyContent:'space-between' }}>
     <Card style={{ width:'40rem'}}>
  <Card.Body>
    <Card.Title>Shopping</Card.Title>
    <Form onSubmit={submitHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>fullName</Form.Label>
    <Form.Control type="text"  name="fullName"  onChange={(e)=>setFullName(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text"  name="address"  onChange={(e)=>setAddress(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> City</Form.Label>
    <Form.Control type="text" name="city"onChange={(e)=>setCity(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Postal Code</Form.Label>
    <Form.Control type="text"  name="postalCode"  onChange={(e)=>setPostalCode(e.target.value)}   />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Country</Form.Label>
    <Form.Control type="text" name="country"  onChange={(e)=>setCountry(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Phone</Form.Label>
    <Form.Control type="text" name="phone"  onChange={(e)=>setPhone(e.target.value)} />
  </Form.Group>

    <Button variant="primary"type="submit"> Continue </Button>
    </Form>
  </Card.Body>
</Card>
        </div>
        </div>
       
}

export default Shopping;