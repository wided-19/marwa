import React ,{useState } from 'react'
import {Button , Modal ,Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../JS/action/AuthAction';
import { useHistory } from 'react-router-dom';

const Login = () => {
       const dispatch =useDispatch();
    const history = useHistory();
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [email , setEmail]=useState("") ;
    const [password , setPassword]=useState("");
     const  handleLogin=()=>{
    const userLogin={email , password}
    dispatch(loginUser(userLogin))
    history.push("/")
    setEmail("")
    setPassword("")
  }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
      
            <Modal.Title>Login</Modal.Title>
        
          <Modal.Body>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email </Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </Form.Group>
  
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleClose(); handleLogin()}}>
            Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default Login
