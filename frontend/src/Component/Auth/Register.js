import React ,{useState } from 'react'
import {Button , Modal ,Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {registerUser} from '../../JS/action/AuthAction'
import { useHistory } from 'react-router-dom'

const Register = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const history =useHistory();
    const [first_name , setFirstName]=useState("");
    const [last_name , setLastName]=useState("");
    const [dateofBrith , setDateOfBrith]=useState("");
    const [email , setEmail]=useState("");
    const [password , setPassword]=useState("");
    const [phone , setPhone]=useState("")


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleRegister =()=>{
const newUser = {first_name , last_name ,dateofBrith ,email , password , phone}
dispatch (registerUser(newUser))
history.push("/Dashboard")
setFirstName("")
setLastName("")
setDateOfBrith("")
setEmail("")
setPassword("")
setPhone("")
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        Register
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          
            <Modal.Title>Register</Modal.Title>
       
          <Modal.Body>
          <Form>
          <Form.Group className="mb-3" >
    <Form.Label>First Name</Form.Label>
    <Form.Control type="texte" placeholder="Firste Name"  name="first_name" value={first_name} onChange={(e)=>setFirstName(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="texte" placeholder="Last Name"  name="last_name" value={last_name} onChange={(e)=>setLastName(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Date Of Brith</Form.Label>
    <Form.Control type="date" placeholder="Date of Brith" name="dateofBirth" value={dateofBrith} onChange={(e)=>setDateOfBrith(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Email </Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Phone</Form.Label>
    <Form.Control type="texte" placeholder="Phone" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
  </Form.Group>
  
  
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleClose();
            handleRegister()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Register
