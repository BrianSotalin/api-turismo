require('dotenv').config();
const express = require('express');
const app = express();


app.use(express.json());

// Importar rutas
const categoriaRoutes = require('./routes/categoriaRoutes');
const caracteristicaRoutes = require('./routes/caracteristicaRoutes');
const lugarRoutes = require('./routes/lugarRoutes');
const provinciaRoutes = require('./routes/provinciaRoutes');

// Usar rutas
app.use('/categorias', categoriaRoutes);
app.use('/caracteristicas', caracteristicaRoutes);
app.use('/lugares', lugarRoutes);
app.use('/provincias', provinciaRoutes);

module.exports = app;
