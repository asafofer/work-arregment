/**
 * @Author: Asaf Ofer
 * @Date:   11-09-2017 21:33
 * @Last modified by:   Asaf Ofer
 * @Last modified time: 12-09-2017 18:32
 */

const xlsx = require('xlsx');
const express = require('express');
const path = require('path');

const app = express();
app.use('/assets', express.static(__dirname + '/assets'));

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
