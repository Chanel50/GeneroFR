const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
	titre:{
        type: String, 
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    categorie: { 
        type: String,
        required: true
    },
    Disponibilites: {
        type: String,
        required: true
    },
    etat_objet: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
      },
      



});

module.exports = mongoose.model("Crud", crudSchema);