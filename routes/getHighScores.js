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

router.get('/', function (req, res, next) {
    let scores = scoreKeeper.loadScores();
    res.end(JSON.stringify(scores));
})

module.exports = router;