const pool = require('../config/db');

exports.getProvincias = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM provincias');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener provincias' });
  }
};
