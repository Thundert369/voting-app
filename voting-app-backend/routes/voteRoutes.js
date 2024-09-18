const express = require('express');
const { submitVoteController, getBallotsController } = require('../controllers/voteController');
const authenticateJWT = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/vote', authenticateJWT, submitVoteController);
router.get('/ballots', authenticateJWT, getBallotsController);

module.exports = router;
