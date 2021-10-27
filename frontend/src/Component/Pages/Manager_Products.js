// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getProduit , saveProduct, deleteProduct } from '../../JS/action/ProduitAction';
import { Button, Card, Form } from 'react-bootstrap';
import {Rating} from '@material-ui/lab'
 
const Manager_Products = ({ history }) => {
  
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
  // eslint-disable-next-line
   const{loading:loadingSave, success:successSave,error:errorSave} = productSave;
   // eslint-disable-next-line
   const{loading:loadingDelete, success:successDelete,error:errorDelete} = productDelete;
    const dispatch = useDispatch();
   useEffect(()=>{
if(successSave){
            setModalVisible(false);
       }
       dispatch(getProduit());
 // eslint-disable-next-line
    },[])

    const openModal = (product)=>{
        setModalVisible(true);
        setId(product._id);
         setImage(product.image);
         setTitle(product.title);
         setPrice(product.price);
         setDescription(product.description);
         setCountInStock(product.countInStock);
         setRating(product.rating);
         dispatch(getProduit())
     }
    
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(saveProduct({
            _id:id,
           image, title,price ,description,countInStock,rating}));
    }
 
    const deleteHandler =(id)=> {
        if(window.confirm('Are you delete?')){
        dispatch(deleteProduct(id));
        dispatch(getProduit())
        
    }
    
}

useEffect(() => {
    dispatch(getProduit())
    // eslint-disable-next-line
   }, [dispatch , history ])
      
    
 
const {produits} = useSelector(state => state.ProduitReducer)
   
   
        // if(user.role==='admin'){
             return (
                <div className="product-header">
                <h2 style={{color:"red"}}>Products</h2>
           
                <Button variant="primary"  onClick={()=>openModal({})}>
                                                    Create Product
                                                </Button> 
                                               
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
 

export default Manager_Products