const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Image API</h1><p>Go to <a href="/api/images">/api/images</a> to view the image URLs.</p>');
});

app.get('/api/images', (req, res) => {
  const jsonFilePath = path.join(__dirname, 'images', 'images.json');

  fs.readFile(jsonFilePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading the JSON file');
    }

    const images = JSON.parse(data);
    res.json(images);
  });
});

app.get('/images', (req, res) => {
  const jsonFilePath = path.join(__dirname, 'images', 'images.json');

  fs.readFile(jsonFilePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading the JSON file');
    }

    const images = JSON.parse(data);
    res.json(images);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
