const Message = require('../models/message');

exports.createMessage = async (req, res) => {
  try {
    const { expediteur, destinataire, contenu } = req.body;
    const message = new Message({ expediteur, destinataire, contenu });
    await message.save();
    res.status(201).json({ message: 'Message created successfully', data: message });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to create message' });
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find({});
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to retrieve messages' });
  }
};

exports.getMessagesFromExpediteur = async (req, res) => {
  const expediteur = req.params.expediteur;

  try {
    const messages = await Message.find({ expediteur: expediteur });

    if (messages.length === 0) {
      return res.status(404).json({ message: "No messages found for the expediteur" });
    }

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve messages from expediteur" });
  }
};


