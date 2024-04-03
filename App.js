import React, { useState } from 'react';
import axios from 'axios';
const fetchData = require('./apiService');

async function getData() {
  try {
    const data = await fetchData();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getData();

function App() {
  const [numberId, setNumberId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const WINDOW_SIZE = 10; // Window size for storing numbers

  const fetchNumbers = async (id) => {
    let apiUrl;
    switch (id) {
      case 'p':
        apiUrl = 'http://20.244.56.144/test/primes';
        break;
      case 'f':
        apiUrl = 'http://20.244.56.144/test/fibo';
        break;
      // Implement similar cases for 'e' and 'r'
      default:
        throw new Error('Invalid number ID');
    }
    const response = await axios.get(apiUrl);
    return response.data.numbers;
  };

  const calculateAverage = (numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  };

  const processNumberRequest = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const newNumbers = await fetchNumbers(id);
      const windowNumbers = [...result?.windowCurrState, ...newNumbers].slice(-WINDOW_SIZE);
      const windowPrevState = [...result?.windowCurrState];
      const windowCurrState = windowNumbers;
      const avg = calculateAverage(windowNumbers);
      setResult({ windowPrevState, windowCurrState, numbers: windowCurrState, avg });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    processNumberRequest(numberId);
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Enter number ID"
          value={numberId}
          onChange={(e) => setNumberId(e.target.value)}
        />
        <button type="submit" disabled={loading}>Calculate</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {result && (
        <div>
          <h2>Results</h2>
          <p>Previous Window State: {result.windowPrevState.join(', ')}</p>
          <p>Current Window State: {result.windowCurrState.join(', ')}</p>
          <p>Numbers from Server: {result.numbers.join(', ')}</p>
          <p>Average: {result.avg.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default App;
