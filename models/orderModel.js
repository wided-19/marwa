const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Produit",
    required: true,
  },
});

const OrderSchema = new mongoose.Schema({
  orderItems: [orderItemSchema],
  shippingAddress: {
    fullName: {
      type: String,
      required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true, 
    },
  },
  paymentMethod: {
    type: String,
    default: "Cash",
  },
  itemsPrice: { 
    type: Number, 
    required: true 
  },
  shippingPrice: { 
    type: Number, 
    required: true 
  },
  taxPrice: { 
    type: Number, 
    required: true 
  },
  totalPrice: { 
    type: Number, 
    required: true 
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
  paidAt: {
    type: Date,
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
  deliveredAt: {
    type: Date,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrderSchema);