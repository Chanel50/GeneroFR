var mongoose = require('mongoose');

var annonceobjetSchema = new mongoose.Schema({
  
    titre: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    catégorie: { 
        type: String,
        required: true
    },
    Disponibilités: {
        type: String,
        required: true
    },
    état_objet: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
      },
});

var annonceobjetModel = mongoose.model('annonceobjet', annonceobjetSchema);
module.exports = annonceobjetModel;