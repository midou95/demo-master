const express = require("express");
const bodyParser =require("body-parser")
const mongoose = require("mongoose")
const shortid= require("shortid")
const app= express()
app.use(bodyParser.json);


mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb+srv://chelbi:<deco1995>@cluster0.go5ta.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});


// Declare the Schema of the Mongo model
const product = new mongoose.Schema({
    _id:{type:string,default:shortid.generate},
   title:String,
   image:String,
   description:String,
  price: Number,
 availablesizes : [String],
});
app.get("/api/products",async (req,res)=>{
    const products= await product.find({})
    res.send(products)
})
app.post("/api/products", async (req,res)=>{
    const newProduct= new product(req.body)
    const savedProduct= await newProduct.save()
    res.send(savedProduct)
})
app.delete("/api/products/:id",(req,res)=>{
    const deletedProduct= await product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct) 
 
})
const port = process.env.PORT || 5000;
app.listen(port,()=> console.log("server at http://localhost:5000"))



//Export the model

