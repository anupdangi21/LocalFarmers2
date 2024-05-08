//importing all the necessary modules 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


let publicPath = path.join(__dirname , 'farmer');
console.log(publicPath);

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/main.html`);
});
app.get('/Addproduct.html', (req, res)=>{
    res.sendFile(`${publicPath}/Addproduct.html`);
});
app.get('/veg', (req, res)=>{
    res.send(`${publicPath}/veg.html`)
});
app.get('/fruit', (req, res)=>{
    res.send(`${publicPath}/fruit.html`)
});

//mongoodb connection for the addProduct
mongoose.connect('mongodb+srv://anupdangi28:farmers123@localfarmersapp.8bbteeb.mongodb.net/Products')
 const db = mongoose.connection;
 db.once('open', ()=> console.log('connected to db successfully for addproduct'))

 //creating the schema for the products
 const  productSchema= new mongoose.Schema ({
     name : String,
     quantity : Number,
     price: String,
     description: String
 });
 
const  Product = mongoose.model("product", productSchema);

app.post('/submit', function(req, res) {
    let newProduct = new Product({
        name: req.body.name,
        quantity:req.body.quantity,
        price:req.body.price,
        description:req.body.description
    })
    newProduct.save();
    console.log(newProduct);
    return res.redirect("/main.html")
});


 //connection prot
 const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));