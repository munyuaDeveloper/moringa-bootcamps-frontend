const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/moringa-bootcamps-frontend'));

app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname+
    '/dist/moringa-bootcamps-frontend/index.html'));});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Running on PORT', PORT)
});
