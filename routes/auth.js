const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');




router.get('/signup', (req, res) =>{
    res.sendFile(`${__dirname}/signup.html`)
})


router.post('/signup', async (req, res) => {

    const emailExist = await User.findOne({email:req.body.email})
    if (emailExist) return res.status(400).send('You are already registered!')

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password,salt)

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword
    })
    try{
        const savedUser = await user.save()
       res.send('succesfully registered')
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.get('/login', (req, res) =>{
    res.sendFile(`${__dirname}/login.html`)
})

router.post('/login', async(req, res) =>{

    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('Email doesnt exists!')

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send('Invalid Password')


    const token = jwt.sign({_id:user._id}, process.env.TOKEN_SECRET)
    //res.header('auth_token',token).send(token)

    res.send('logged in!')


})

module.exports = router;