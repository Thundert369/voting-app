const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const voteRoutes = require('./routes/voteRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());  // To parse JSON request bodies

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/vote', voteRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
