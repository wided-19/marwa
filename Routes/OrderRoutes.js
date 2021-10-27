const Router = require('express').Router()
const  Order =require('../models/orderModel')
const isAuth = require("../midleware/isAuth")




//      Create new order
//    POST /api/orders
//   Private
Router.post('/', isAuth, async(req, res) => {
  
try{
    if(req.body.orderItems.length === 0){
        return  res.status(400).send({msg: "No order items, cart is empty"})
      } 
  
    const newOrder = new Order({
     orderItems: req.body.orderItems,
     shippingAddress: req.body.shippingAddress,
     paymentMethod: req.body.paymentMethod,
     itemsPrice: req.body.itemsPrice,
     shippingPrice: req.body.shippingPrice,
     taxPrice: req.body.taxPrice,
     totalPrice: req.body.totalPrice,
     fullName: req.body.fullName,
     phone: req.body.phone,
     user: req.user._id,
     })
        
   
     const response = await newOrder.save()
     res.status(200).send({response: response, msg: "Order saved"})
     
  } catch (error) {
         console.log(error)
         res.status(500).send({msg: "Can not save order!"}) };
    })




//      Get order by idss
// GET /api/orders/:id
//     Private
Router.get('/:id', isAuth, async(req, res) => {
    try{
    const order = await Order.findById( req.params.id )

    if(order){
        return res.status(200).send({response: order, msg: "Getting orders with success"})

    } 
        return res.status(200).send({msg:'Order not found' })
   } catch (error) {
    console.log(error)
    return res.status(500).send({msg: "Can not get this order!!"})
}
})



Router.get('/history', isAuth, async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    if(orders) return res.status(200).send({response:orders, msg: "Getting Your orders with success"});
    else return res.status(400).send({msg: "No orders !!"})
  })




//        Update order to paid
//        PUT /api/orders/:id/pay
//      Private
Router.put('/:id/pay',isAuth, async (req, res) => {
    const order = await Order.findById( req.params.id )

    if(order){
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address
        }

        const updatedOrder = await order.save()
        res.send({ msg: 'Order Paid', order: updatedOrder });

    } else {
      
        res.status(404).send({ msg: 'Order Not Found' });

    }
})


//      Update order to delivered
//      PUT /api/orders/:id/deliver
//      Private/Admin
Router.put('/:id/deliver', isAuth, async (req, res) => {
    try{
    const order = await Order.findById( req.params.id )

    if(order){
        order.isDelivered = true
        order.deliveredAt = Date.now()

        const updatedOrder = await order.save()

        res.status(200).send({ msg: "Order delivered", order: updatedOrder });
    } else {
    
        res.status(400).send({msg: "Can not delivred order"})
    } 
} catch (error) {
        res.status(500).send({msg:'Order not found'})
    }
})


//       Get logged in user orders
//       Get /api/orders/myorders
//      Private
Router.get('/myorder',isAuth, async (req, res) => {
    try{
    const orders = await Order.find({ user: req.user._id });
    if(orders) return res.status(200).send({response:orders, msg: "Getting Your orders with success"});
    else return res.status(400).send({msg: "No orders !!"})
    }
    catch (error) {
        res.status(500).send({msg:'Order not found'})
    }
})



//       Get all orders
//      Get /api/orders
//     Private/Admin
Router.get('/', isAuth,  async (req, res) => {
    try{
    const orders = await Order.find()
    if(orders){
        return res.status(200).send({response: orders, msg: "Getting orders with success"})
    }
    return res.status(400).send({msg: "No orders "})
} catch (error) {
    console.log(error)
    return res.status(500).send({msg: "Can not getting orders!!"})
}

})
Router.delete('/:id', isAuth,async(req, res) => {
    try {
        let result = await Order.findByIdAndDelete({_id: req.params.id})
        if(result){
            return res.status(200).send({msg: "Order deleted", response: result})
        }
        return res.status(400).send({msg: "This order is not exist"})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: "Can not delet this order!"})
    }

})

module.exports = Router;
