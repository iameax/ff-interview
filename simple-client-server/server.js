const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.set('access-control-allow-origin', '*');
  res.send('Hello from Express.js server!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
