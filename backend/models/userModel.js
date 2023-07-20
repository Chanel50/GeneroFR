const mongoose = require('mongoose');

//Creating Schema using mongoose
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        minLength:[4,'Name should be minimum of 4 characters']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                // Regular expression to validate email format
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: 'Invalid email format'
        }
    },
    password:{
        type:String,
        required:true,
        minLength:[8,'Password should be minimum of 8 characters']
    },
    telephone: {
        type: Number,
        required: true
    },
    date_de_naissance: { 
        type: Date 
      },
      genre: {
        type: String,
        required: true
    }, 
    roles: {
        type: "string",
        enum: ['user', 'admin'], default:"user",
        message: 'Value is not supported'
      },
      
    token:{
        type:String
    }
})

//Creating models
const userModel = mongoose.model('user',userSchema);
module.exports = userModel;