const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');



const app = express();

app.use(express.static('public'))
app.use(bodyParser({extended:true}))

const authRoute = require('./routes/auth')


dotenv.config()

mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true,useUnifiedTopology:true},() =>
console.log('Connected to DB!'))



app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.use('/', authRoute)

let port = process.env.PORT;

if(port == null || port == ""){
    port = 3000
}

app.listen(port, ()=>{
    console.log('server is running successfully!')
})