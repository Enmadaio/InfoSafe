const express = require('express');
const web3 = require('../utils/web3');

const router = express.Router();

router.post('/getEthBalance', (req, res) => {
    if (req.body.account) {
        web3.getEthBalance(req.body.account).then(result => res.json(result))
            .catch(err => {
                console.error(err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(500);
    }
});

router.post('/getTokenBalance', (req, res) => {
    if (req.body.account) {
        web3.getTokenBalance(req.body.account).then(result => res.json(result))
            .catch(err => {
                console.error(err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(500);
    }
});

router.post('/sendEth', (req, res) => {
    if (req.body.account && req.body.gas && req.body.amount) {
        web3.sendEthToFallback(req.body.account, req.body.gas, req.body.amount).then(result => res.json(result))
            .catch(err => {
                console.error(err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(500);
    }
});

module.exports = router;