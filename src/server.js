const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const Routes = require('./routes');

app.use(express.json());
app.use(Routes);

mongoose.connect(process.env.DB_CONNECT, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  }, console.log('Connected do database'));


app.listen(3333);