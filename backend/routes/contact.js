const express = require('express');
const contactController = require('../controllers/contact');
const router = express.Router();

router.get('/', contactController.findAll);
router.get('/:id', contactController.findOne);
router.post('/', contactController.create);
router.patch('/:id', contactController.update);
router.delete('/:id', contactController.destroy);
router.get('/count', contactController.count);

module.exports = router;
