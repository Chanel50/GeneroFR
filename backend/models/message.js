const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  expediteur: { type: String, required:true },
  destinataire: { type: String, required:true },
  contenu: { type: String, required:true },
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
