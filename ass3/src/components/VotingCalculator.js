import { useState } from "react";
import "./VotingCalculator.css";

// VotingCalculator component allows users to vote for two candidates and displays the total votes for each candidate and overall.
// Voting results are updated in real-time as votes are cast. But not saved anywhere, so they reset on page refresh.
function VotingCalculator() {
  const [votesA, setVotesA] = useState(0);
  const [votesB, setVotesB] = useState(0);

  const totalVotes = votesA + votesB;

  return (
    <div className="voting-container">
      <h2>Voting Calculator</h2>
      <div className="voting-buttons">
        <button onClick={() => setVotesA(votesA + 1)}>Vote for A</button>
        <button onClick={() => setVotesB(votesB + 1)}>Vote for B</button>
      </div>

      <table className="voting-table">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Candidate A</td>
            <td>{votesA}</td>
          </tr>
          <tr>
            <td>Candidate B</td>
            <td>{votesB}</td>
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>{totalVotes}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default VotingCalculator;
