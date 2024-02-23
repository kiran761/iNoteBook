const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type : String,
        required : true
    } ,

    password:{
        type:String,
        required:true
    },
    email :{
        type :String,
        unique:true
    },
    date :{
        type : String,
        default : Date.now
    }

    
  });

  module.exports = mongoose.model('user',userSchema)