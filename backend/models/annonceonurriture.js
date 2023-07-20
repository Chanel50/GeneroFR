var mongoose = require('mongoose');

var annonceonurritureSchema = new mongoose.Schema({
  
    titre: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    
    Disponibilités: {
        type: String,
        required: true
    },
    date_de_consommation_limite: {
        type: Date,
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

var annonceonurritureModel = mongoose.model('annonceonurriture', annonceonurritureSchema);
module.exports = annonceonurritureModel;