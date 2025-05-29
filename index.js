const express = require('express');
const app = express();
const PORT = 3000;

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});