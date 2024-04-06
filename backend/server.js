const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const menuItems = require('./menuItem');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/menu', async (req, res) => {
    res.json(menuItems)
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});