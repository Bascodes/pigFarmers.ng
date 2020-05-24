const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');





const app = express();

app.use(express.static('public'))
app.use(bodyParser({extended:true}))
app.set('view engine', 'ejs');


const authRoute = require('./routes/auth')
const blogRoute = require('./routes/blogRoute')

dotenv.config()

mongoose.connect('mongodb+srv://victor_eyo:test123@team031-5rrit.mongodb.net/userDB',{useNewUrlParser:true,useUnifiedTopology:true},() =>
console.log('Connected to DB!'))

mongoose.connect('mongodb+srv://victor_eyo:test123@team031-5rrit.mongodb.net/blogDB',{useNewUrlParser:true,useUnifiedTopology:true},() =>
console.log('Connected to DB!'))



app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.use('/', authRoute)
app.use('/', blogRoute)

let port = process.env.PORT;

if(port == null || port == ""){
    port = 3000
}

app.listen(port, ()=>{
    console.log('server is running successfully!')
})