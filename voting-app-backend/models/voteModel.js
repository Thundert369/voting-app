const pool = require('../config/db');

const submitVote = async (userId, ballotId, candidate) => {
  const result = await pool.query(
    'INSERT INTO votes (user_id, ballot_id, candidate) VALUES ($1, $2, $3) RETURNING *',
    [userId, ballotId, candidate]
  );
  return result.rows[0];
};

const getVotesByBallotId = async (ballotId) => {
  const result = await pool.query('SELECT * FROM votes WHERE ballot_id = $1', [ballotId]);
  return result.rows;
};

module.exports = { submitVote, getVotesByBallotId };
