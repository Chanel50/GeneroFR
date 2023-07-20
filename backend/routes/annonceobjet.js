const express = require('express')
const UserControllers = require('../controllers/annonceobjet')
const verifyRole = require('../routes/checkRole');


const router = express.Router();

router.get('/', UserControllers.findAll);
router.get('/annonceobje', UserControllers.getAllannonceobjet);
router.get('/searchannonceobje', UserControllers.searchannonceobjet);
router.get('/:id', UserControllers.findOne);
router.post('/', UserControllers.create);
router.patch('/:id', UserControllers.update);
router.delete('/:id', UserControllers.destroy);

module.exports = router;