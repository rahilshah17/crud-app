const express = require('express');
require('./db');
const Product = require("./models")
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

const app = express();
app.use(express.json());
app.listen(3000, () => {console.log("listening on port 3000")})

app.post('/api/products', async (req, res) =>{
    const product = new Product({
        name: req.body.name,
        email: req.body.email
    })
    if (validateEmail(req.body.email) == false){
        console.log("You have written an invalid email")
    }
    await product.save();
    
    return res.status(201).send(product);
})

