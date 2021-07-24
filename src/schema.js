const mongoose = require('mongoose');

const { Schema } = mongoose;


const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,    //ee20b104@smail.iitm.ac.in   25 charachters
        required:true
    }
})
module.exports = userSchema