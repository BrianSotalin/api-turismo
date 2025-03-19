const express = require('express');
const router = express.Router();
const lugarController = require('../controllers/lugarController');

router.get('/', lugarController.getLugares);         // Obtener todos los lugares turísticos
router.get('/:id', lugarController.getLugarById);   // Obtener un lugar por ID
router.post('/', lugarController.createLugar);      // Crear un nuevo lugar

module.exports = router;
