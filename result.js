import React from 'react';

function Results({ result }) {
  return (
    <div>
      <h2>Results</h2>
      <p>Previous Window State: {result.windowPrevState.join(', ')}</p>
      <p>Current Window State: {result.windowCurrState.join(', ')}</p>
      <p>Numbers from Server: {result.numbers.join(', ')}</p>
      <p>Average: {result.avg}</p>
    </div>
  );
}

export default Results;