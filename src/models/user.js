
const mongoose=require('mongoose')

const usersSchema=new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:Number,required:true},
    city:{type:String},
    country:{type:String},
    zipCode:{type:Number}
},{versionKey:false})
const userModel=new mongoose.model('users',usersSchema)
module.exports=userModel