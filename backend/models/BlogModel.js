const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
	titre:{
        type: String, 
        required: true
    },
    contenu: {
        type: String,
        required: true
    },
    
    date_Blog: {
        type: Date,
        default : ()=>{
          return new Date();
    }},
    
    image: {
        type: String,
        required: true
      },
      



});

module.exports = mongoose.model("Blog", BlogSchema);