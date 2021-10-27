import React, {useEffect}from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getProduit } from '../../JS/action/ProduitAction';
import Produit from './produit'
import {Carousel} from 'react-bootstrap'



const Home = () => {
  //const {user} = useSelector(state => state.AuthReducer)
    const {produits} = useSelector(state => state.ProduitReducer)
     const dispatch = useDispatch()

useEffect(() => {
  dispatch(getProduit())
  // eslint-disable-next-line
}, [])

    return (
        <div>
            <h1> welcome to Home page</h1>




            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.mytek.tn/media/webp_image/wysiwyg/banner/oct21/pc-ideapad-gaming-3.webp"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.mytek.tn/media/webp_image/wysiwyg/banner/sep21/pc-asus-rog-flow-x13.webp"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.mytek.tn/media/webp_image/wysiwyg/banner/sep21/slider-selection-laptop-desktop-aio-4.webp"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>

        <div style={{display:"flex" ,flexWrap:"wrap" ,margin:'70px',justifyContent:'space-between' }}>
                
                {
                 produits.map(product => 
                 <Produit product={product} key={product._id} />
                 )
                }
             
        </div>
    
        </div>
    )
}

export default Home
