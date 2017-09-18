const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const TeamSchema = mongoose.Schema({
  name: {
    type: String,
    default: "noname"
  },
  stocks: {
    type: Array
  }

});



const Team = mongoose.model('Team', TeamSchema);

module.exports = {Team};
