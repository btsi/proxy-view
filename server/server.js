const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express()
const port = process.env.PORT || 3002;

app.use(express.static(path.join(__dirname, "../dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.listen(port)
