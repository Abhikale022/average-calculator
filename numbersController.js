const express = require('express');
const numbersService = require('../services/numbersService');

const router = express.Router();

router.get('/:numberid', async (req, res) => {
  const { numberid } = req.params;
  try {
    const result = await numbersService.processNumberRequest(numberid);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
