const pool = require('../config/db');

exports.getLugares = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM lugares');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener lugares' });
  }
};

exports.getLugarById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM lugares WHERE lugaresid = $1', [id]);
    result.rows.length ? res.json(result.rows[0]) : res.status(404).json({ message: 'No encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el lugar' });
  }
};

exports.createLugar = async (req, res) => {
  const { nombre, descripcion, categoriasid, ubicacion, clima, provinciasid } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO lugares (nombre, descripcion, categoriasid, ubicacion, clima, provinciasid) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [nombre, descripcion, categoriasid, ubicacion, clima, provinciasid]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el lugar' });
  }
};
