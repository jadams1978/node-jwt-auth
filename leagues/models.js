const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const LeagueSchema = mongoose.Schema({
  name: {
    type: String,
    default: "noname"
  },
  teams: {
    type: Array
  }

});



const League = mongoose.model('League', LeagueSchema);

module.exports = {League};
