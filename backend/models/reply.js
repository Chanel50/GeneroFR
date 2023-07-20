var mongoose = require('mongoose');

var replySchema = new mongoose.Schema({

    date_reply: {
        type: Date,
        default : ()=>{
          return new Date();
        }},
  
    id_commentaires:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'commentairesModel'
    },
    
    reply: {
        type: String,
        required: true
    }
});

var replyModel = mongoose.model('reply', replySchema);
module.exports = replyModel;