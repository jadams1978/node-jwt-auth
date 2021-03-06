const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const {League} = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();

router.use(bodyParser.urlencoded({ extended: true })); 
router.use(bodyParser.json());

router.post('/createleague', (req, res) => {
  console.log('john', req.body)
  League.create({name: req.body.leaguename}, function(err, doc) {
    if (err) return;
    console.log(doc);
    req.body.league = doc.id;
    res.redirect(`/league/${doc.id}`);
  })
  
})
router.get('/league/:id', (req, res) => {
  console.log('baseball', req.params);

  /*return League
    .find()

    .then(leagues => res.render("index", {title: leagues}))
    .catch(err => res.status(500).json({message: 'Internal server error'}));
});*/
res.render('league', { title: req.body.leaguename });
});
module.exports = {router};
