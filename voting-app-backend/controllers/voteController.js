const { submitVote, getVotesByBallotId } = require('../models/voteModel');
const { getAllBallots } = require('../models/ballotModel');

const submitVoteController = async (req, res) => {
  const { ballotId, candidate } = req.body;
  const userId = req.user.id;
  const vote = await submitVote(userId, ballotId, candidate);
  res.json(vote);
};

const getBallotsController = async (req, res) => {
  const ballots = await getAllBallots();
  res.json(ballots);
};

module.exports = { submitVoteController, getBallotsController };
