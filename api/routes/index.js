const express = require('express');
const web3 = require('../utils/web3');

const router = express.Router();

router.get('/getEthBalance', (req, res) => {
    if (req.query.account) {
        web3.getEthBalance(req.query.account).then(result => res.json(result))
            .catch(err => {
                console.error(err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(500);
    }
});

router.get('/getTokenBalance', (req, res) => {
    if (req.query.account) {
        web3.getTokenBalance(req.query.account).then(result => res.json(result))
            .catch(err => {
                console.error(err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(500);
    }
});

router.post('/sendEth', (req, res) => {
    if (req.query.account && req.query.gas && req.query.amount) {
        web3.sendEthToFallback(req.query.account, req.query.gas, req.query.amount).then(result => res.json(result))
            .catch(err => {
                console.error(err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(500);
    }
});

module.exports = router;