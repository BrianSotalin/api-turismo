const pool = require('../config/db');

exports.getCaracteristicas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM caracteristicas');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener características' });
  }
};

exports.getCaracteristicaById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM caracteristicas WHERE caracteristicasid = $1', [id]);
    result.rows.length ? res.json(result.rows[0]) : res.status(404).json({ message: 'No encontrada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la característica' });
  }
};

exports.createCaracteristica = async (req, res) => {
  const { lugaresid, nombre, descripcion } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO caracteristicas (lugaresid, nombre, descripcion) VALUES ($1, $2, $3) RETURNING *',
      [lugaresid, nombre, descripcion]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la característica' });
  }
};
