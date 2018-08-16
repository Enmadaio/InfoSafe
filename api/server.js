const express = require('express');
const web3 = require('./utils/web3');

web3.init();

const app = express();

app.use('/api', require('./routes/index'));

app.listen('3000', () => console.log('Listening on 3000.'));

