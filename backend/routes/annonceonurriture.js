const express = require('express')
const UserControllers = require('../controllers/annonceonurriture')
const verifyRole = require('../routes/checkRole');


const router = express.Router();

router.get('/', UserControllers.findAll);
router.get('/allannonceonurriture', UserControllers.getAllannonceonurriture);
router.get('/searchannonceonurriture', UserControllers.searchannonceonurriture);
router.get('/:id', UserControllers.findOne);
router.post('/', UserControllers.create);
router.patch('/:id', UserControllers.update);
router.delete('/:id', UserControllers.destroy);

module.exports = router;