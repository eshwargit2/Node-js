const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase')
dotenv.config({path:path.join(__dirname, 'config','config.env')});

const products = require('./routes/products');
const orders = require('./routes/order');

connectDatabase();

app.use(express.json());
app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT, ()=>{
    console.log(`server listerning to port ${process.env.PORT} in ${process.env.NODE_ENV} `);
    
})