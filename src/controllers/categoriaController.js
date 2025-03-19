const pool = require('../config/db');

exports.getCategorias = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categorias');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las categorías' });
  }
};

exports.getCategoriaById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM categorias WHERE categoriasid = $1', [id]);
    result.rows.length > 0 ? res.json(result.rows[0]) : res.status(404).json({ message: 'Categoría no encontrada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la categoría' });
  }
};

exports.createCategoria = async (req, res) => {
  const { nombre } = req.body;
  try {
    const result = await pool.query('INSERT INTO categorias (nombre) VALUES ($1) RETURNING *', [nombre]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la categoría' });
  }
};
