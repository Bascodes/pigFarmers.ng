const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        max:50
    },
    farm_name:{
        type:String,
        required:true,
        max:70
    },
    farm_location:{
        type:String,
        required:true,
        max:80
    },
    email:{
        type:String,
        required:true,
        max:50
    },
    phone_no:{
        type:Number,
        required:true,
        max:50
    }
})


module.exports = mongoose.model('data', dataSchema)