// src/components/VotingDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VotingDashboard() {
  const [ballots, setBallots] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/vote/ballots', {
      headers: { Authorization: token }
    })
    .then(response => setBallots(response.data))
    .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Available Ballots</h2>
      <ul>
        {ballots.map(ballot => (
          <li key={ballot.id}>{ballot.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default VotingDashboard;
