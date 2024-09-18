const pool = require('../config/db');

const createBallot = async (title, candidates) => {
  const result = await pool.query(
    'INSERT INTO ballots (title, candidates) VALUES ($1, $2) RETURNING *',
    [title, candidates]
  );
  return result.rows[0];
};

const getAllBallots = async () => {
  const result = await pool.query('SELECT * FROM ballots');
  return result.rows;
};

module.exports = { createBallot, getAllBallots };
