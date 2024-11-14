
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const recipeRoutes = require('./routes/recipeRoutes')

const app = express();

app.use(bodyparser.json());

mongoose.connect('mongodb+srv://diwakar:lokeshMsd1@cluster0.yzkmm.mongodb.net/')
.then(()=>{
    console.log('connected to the MongoDB');
    
})

.catch((err)=>{
  console.log(err);
  
})

app.use('/api', recipeRoutes)


const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('server runs on ${port}');
    
})