const express = require('express');
const app = express();

app.use((req, res, next) => {
  req.username = 'Eslam';
  next();
});

app.get('/profile', (req, res) => {
  res.send(`Hello, ${req.username}`);
});

app.listen(3000);