const express = require('express');
const db = require('./db');
const router = require('./routes');
const app = express();
const PORT = 3000 || process.env.PORT;

/* Middleware */
var cors = require('cors');

app.use(express.static('client/dist'));
app.use(express.json());
app.use(cors());

app.use('/classes', router);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
