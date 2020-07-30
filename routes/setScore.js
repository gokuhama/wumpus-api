var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
const ScoreKeeper = require('../scripts/scorekeeper');
const scoreKeeper = new ScoreKeeper();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// comply with CORS policy
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.post('/', function (req, res, next) {
    console.log(req.body);
    let rank = scoreKeeper.updateHighScore(req.body.player);
    res.end(JSON.stringify(rank));
})

module.exports = router;