var express = require('express');
var router = express.Router();
const ScoreKeeper = require('../scripts/scorekeeper');
const scoreKeeper = new ScoreKeeper();

// comply with CORS policy
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.post('/', function (req, res, next) {
    let result = scoreKeeper.resetScores();
    res.end(JSON.stringify(result));
})

module.exports = router;