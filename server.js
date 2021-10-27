const express =require('express')
const connectDB = require('./config/connectDB')
const path = require('path')
require('dotenv').config('./config/.env')
const cors = require('cors')
const authRouter = require('./Routes/Auth')
const produitRouter = require("./Routes/ProduitRouter")
const userRouter =require('./Routes/User')
const orderRouter = require('./Routes/OrderRoutes')


const app = express()
connectDB()

app.use(cors())

//middleware
app.use(express.json())
//use Routes
app.use('/api/auths',authRouter);
app.use('/api/products', produitRouter);
app.use('/api/user',userRouter);
app.use('/api/order', orderRouter)

//app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

//deploy
if(process.env.NODE_ENV === "production") {
    //set static folder
    //All the js and css files will be read and served from this folder
    app.use(express.static("frontend/build"))

    //index.html for all page routes
    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, "frontend", "build", "index.html"))
    })
}

const PORT= process.env.PORT || 6000;

app.listen(PORT, (err)=>{
err?
console.log(err)
:
console.log(`Server  is running on port ${PORT}....`)
})