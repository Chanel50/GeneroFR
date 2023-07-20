const express = require('express');
const router = express.Router();

const messageController = require('../controllers/message');

router.post('/', messageController.createMessage);
router.get('/', messageController.getAllMessages);
router.get('/:expediteur', messageController.getMessagesFromExpediteur);

module.exports = router;