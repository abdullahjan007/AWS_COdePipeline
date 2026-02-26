const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from AWS CodePipeline 🚀');
  res.send('Hello Abdullah Jan and Sathiiii g');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
