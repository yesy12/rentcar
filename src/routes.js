const express = require('express');
const route = express.Router();


route.get('/', (req, res) => {
  res.send('Salve');
})

module.exports = route;