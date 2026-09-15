const express = require('express');
const app = express();
const PORT = 3000;

// Fast endpoint - responds immediately
app.get('/fast', (req, res) => {
  res.json({ message: 'fast response' });
});

// Slow endpoint - simulates a heavier operation with 100ms delay
app.get('/slow', (req, res) => {
  setTimeout(() => {
    res.json({ message: 'slow response' });
  }, 100);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});