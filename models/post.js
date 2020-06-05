const mongoose = require('mongoose')



const postSchema = new mongoose.Schema({
    title:{
        type:String,
        
    },
    post:{
        type:String,
        
    },
    password:{
        type:String,
        
    },
    date:{
        type:Date,
        default:Date.now
    },
})

const Post = mongoose.model("Post", postSchema);


module.exports = mongoose.model('post', postSchema)