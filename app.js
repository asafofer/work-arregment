/**
 * @Author: Asaf Ofer
 * @Date:   11-09-2017 21:33
 * @Last modified by:   Asaf Ofer
 * @Last modified time: 11-09-2017 22:35
 */

const xlsx = require('xlsx');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('working');
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(200);
});

app.listen(300, () => {
  console.log('running on port 300');
});
