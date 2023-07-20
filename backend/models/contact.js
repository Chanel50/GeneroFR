var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
  
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

var contactModel = mongoose.model('contact', contactSchema);
module.exports = contactModel;