const mongoose = require("mongoose")
const bcrypt = require("")

const userSchema = new mongoose.Schema({

    name:{type:String,required:true, trim:true},
    email:{type:String,required:true,unique:true,trim:true},
    password:{type:String,required:true, trim:true},

},{timestamps:true})

userSchema.statics.checkForEmail= async(email)=>{
    const check = await User.findOne({email})
    
    if(check){
        return true
    }

    return false
}

userSchema.pre("save", async function(next){
 const user = this
    
    if(user.isModified("password")){
        user.password = await
    }
})
const User = mongoose.model("User",userSchema)
module.exports = User