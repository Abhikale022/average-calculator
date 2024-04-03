// apiService.js

const axios = require('axios');

const fetchData = async () => {
  try {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU4NTI2LCJpYXQiOjE3MTIxNTgyMjYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjhhMmNjZjVjLWFhOGEtNDI3Yy1iNzk4LWZjYjAxOTZkMGM5YiIsInN1YiI6ImFkMjk4OUBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiQUZGT1JETUVEIiwiY2xpZW50SUQiOiI4YTJjY2Y1Yy1hYThhLTQyN2MtYjc5OC1mY2IwMTk2ZDBjOWIiLCJjbGllbnRTZWNyZXQiOiJ4QkFLd1NhZEVSWVhxVk1HIiwib3duZXJOYW1lIjoiQWJoc2loZWsgS2FsZSIsIm93bmVyRW1haWwiOiJhZDI5ODlAc3JtaXN0LmVkdS5pbiIsInJvbGxObyI6IlJBMjExMTAyODAxMDE0OCJ9.2uHiZToekOjaQQh9_JhghcEs-e59V6dqsM9a6S8X8zo";

    const response = await axios.get('http://api.example.com/data', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log(response.data);}
     catch (error) {
    throw new Error('Failed to fetch data: ' + error.message);
     }

};


module.exports = fetchData;
