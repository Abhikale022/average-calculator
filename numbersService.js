// numbersService.js

const axios = require('axios');

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

module.exports = {
  fetchNumbers,
};
