  
import React from 'react';
import {Link} from 'react-router-dom';
import {Card , Button } from 'react-bootstrap'
import {Rating} from '@material-ui/lab'

function Produit({product }) {
  
  
        return(
            
                    <div>
     <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={product.image} />
  <Card.Body>
    <Card.Title>{product.title} </Card.Title>
    <Card.Text> ${product.price}</Card.Text>
    <Rating name="read-only" value={product.rating} readOnly/>  
   < Link to={`/produit/${product._id}`} >
    <Button variant="primary">Product Detail</Button>
    </Link>
  </Card.Body>
</Card>
               
            </div>
            
  )      
}
  
export default Produit;