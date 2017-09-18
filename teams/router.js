const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const {Team} = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();

router.use(bodyParser.urlencoded({ extended: true })); 
router.use(bodyParser.json());

router.post('/createteam', (req, res) => {
  console.log('john', req.body);
  
  Team.create({name: req.body.teamname}, function(err, doc) {
    if (err) return;
    console.log(doc);
    res.redirect(`/team/${doc.id}`);
  })
  
})
router.get('/team/:id', (req, res) => {
  console.log('baseball', req.params);

  /*return League
    .find()

    .then(leagues => res.render("index", {title: leagues}))
    .catch(err => res.status(500).json({message: 'Internal server error'}));
});*/
res.render('team', { title: req.body.teamname });
});
module.exports = {router};
