const express = require('express');
const router = express.Router();
const caracteristicaController = require('../controllers/caracteristicaController');

router.get('/', caracteristicaController.getCaracteristicas);         // Obtener todas las características
router.get('/:id', caracteristicaController.getCaracteristicaById);   // Obtener una característica por ID
router.post('/', caracteristicaController.createCaracteristica);      // Crear una nueva característica

module.exports = router;
