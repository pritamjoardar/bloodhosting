const jwt = require("jsonwebtoken")
const mongoose = require("mongoose");
//for register
const RegSchema = new mongoose.Schema({
   
    date:{
        type:Date,
        default:Date.now
    },
    name:{
        type:String,
        required:true
    },
    gmail:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
   
    blood:{
        type:String,
        required:true
    },
    pin:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    },
    mark:{
        type:String,
        default:"not doner"
    },
    messages:[
        {
            name: {
                required: true,
                type: String
            },
            email:{
                type:String,
                required: true,
        
            },
            phone:{
                type:Number,
                required:true
            },
            message:{
                type:String,
                required:true
            },
        }
    ],
    tokens:[{
        token:{
        type:String,
        required:true
        }
    }]
        
});

RegSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this._id},process.env.KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}
RegSchema.methods.addMesage = async function(name, email ,phone ,message){
    try {
        this.messages = this.messages.concat({name, email ,phone ,message});
        await this.save();
        return this.messages;
    } catch (error) {
        console.log(error);
    }
}
const UserRegister = mongoose.model("UserRegistration",RegSchema);
module.exports = UserRegister;
