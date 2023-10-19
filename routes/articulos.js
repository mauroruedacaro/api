const express = require('express');
const router = express.Router();
const articuloController = require('../controllers/articuloController');

router.get('/', articuloController.getArticulos);
router.post('/', articuloController.createArticulo);
router.get('/:id', articuloController.getArticulo);
router.put('/:id', articuloController.updateArticulo);
router.delete('/:id', articuloController.deleteArticulo);

module.exports = router;
