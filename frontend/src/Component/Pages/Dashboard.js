import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getProduit , saveProduct, deleteProduct } from '../../JS/action/ProduitAction';
import { Button, Card, Form } from 'react-bootstrap';
import {Rating} from '@material-ui/lab'
 
const Dashboard = () => {
  
  // const { user}   = useSelector(state => state.AuthReducer)
   const[modalVisible,setModalVisible] = useState(false);
   const[id,setId]=useState();
   const[image,setImage]=useState("");
   const[title,setTitle]=useState("");
   const[price,setPrice]=useState("");
   const[description,setDescription]=useState("");
   const[countInStock,setCountInStock]=useState("");
   const[rating,setRating]=useState("");
   const productSave=useSelector(state=>state.productSave);
   const productDelete=useSelector(state=>state.productDelete);
  
  // const {loading,products,error} = productList;
   const{success:successSave} = productSave;
   //const{loading , success:successDelete,error:errorDelete} = productDelete;
    const dispatch = useDispatch();
   useEffect(()=>{
if(successSave){
            setModalVisible(false);
       }
       dispatch(getProduit());
 // eslint-disable-next-line
    },[dispatch])

    const openModal = (product)=>{
        setModalVisible(true);
        setId(product._id);
         setImage(product.image);
         setTitle(product.title);
         setPrice(product.price);
         setDescription(product.description);
         setCountInStock(product.countInStock);
         setRating(product.rating);
     }
    
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(saveProduct({
            _id:id,
           image, title,price ,description,countInStock,rating}));
    }
 
    const deleteHandler =(id)=> {
        if(window.confirm('Are you sure?')){
        dispatch(deleteProduct(id));
    }
}
    
 
const {produits} = useSelector(state => state.ProduitReducer)
    

useEffect(() => {
 dispatch(getProduit())
}, [dispatch])
   
        // if(user.role==='admin'){
             return (
                <div className="product-header">
                <h3>Products</h3>
           
                 <button id="create-btn" className="button primary" onClick={()=>openModal({})}>
                                                    Create Product
                                                </button> 
                                               <div>
                                                    <strong style={{color:"red"}}>You need Admin access to create a product</strong>
                                                </div>
           {modalVisible &&  <div className="form">
           
           <Card style={{ width: '35rem' }}>
               
           <Card.Body>
                                           
           <Card.Title> Create Product</Card.Title>
           
           <Form    onSubmit={submitHandler}>
           <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label> Image</Form.Label>
           <Form.Control type="url" name="image" value={image}onChange={(e)=>setImage(e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3" >
           <Form.Label>Title</Form.Label>
           <Form.Control  type="text" name="title" value={title}  onChange={(e)=>setTitle(e.target.value)}/>
           </Form.Group>
           
           <Form.Group className="mb-3" >
           <Form.Label>Price</Form.Label>
           <Form.Control type="number" name="number" value={price}  onChange={(e)=>setPrice(e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3" >
           <Form.Label>Description</Form.Label>
           <Form.Control  type="text" name="description"  value={description} onChange={(e)=>setDescription(e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3">
           <Form.Label> Number of Items</Form.Label>
           <Form.Control type="number" name="countinstock" value={countInStock}  onChange={(e)=>setCountInStock(e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3">
           <Form.Label>  Rating</Form.Label>
           <Form.Control type="number" name="rating" id="rating" value={rating}onChange={(e)=>setRating(e.target.value)}/>
           </Form.Group>
           
           <Button  type="submit" variant="primary">{id ?"Update":"Create"}</Button>
           <Button variant="secondary" onClick={()=>setModalVisible(false)}> Back</Button>
           
           </Form>
           </Card.Body>
           </Card>
           </div>
           }
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           
                        <div style={{display:"flex" ,flexWrap:"wrap" ,margin:'70px',justifyContent:'space-between' }}>
                           
                                    {
                                    
                                    produits.map(product =>(
                                           
                                            <Card style={{ width: '18rem' }}  key={product._id}>
                                          
                                           <Card.Img variant="top" src={product.image} />
                                           
                                           <Card.Body>
                                           
                                           <Card.Title>Title:{product.title}</Card.Title>
                                           
                                           <Card.Text> Id: {product._id}</Card.Text> 
                                          
                                          <Card.Text> Price: $ {product.price}</Card.Text> 
           
                                           <Card.Text> Description : {product.description}</Card.Text> 
                                           <Card.Text>  Count In Stock : {product.countInStock}</Card.Text> 
                                           <Rating name="read-only" value={product.rating} readOnly/> 
                                           <Button variant="primary" onClick={()=>openModal(product)}>Edit</Button>{'  '}
                                           <Button variant="primary"onClick={()=>deleteHandler(product._id)}>Delete</Button>
                                         
                                           </Card.Body>
                                           </Card>
                                    ))}
                               
                        </div>
                     
                    </div>
             )
        // }else {
         //    return <div> Private route </div>
        // }
}
 

export default Dashboard