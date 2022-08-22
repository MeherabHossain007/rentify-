const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    reuire: true,
  },
  name: {
    type: String,
    reuire: true,
  },

 
  title: {
    type: String,
    reuire: true,
  },
 

  review: {
    type: String,
    reuire: true,
  },

  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("review", userSchema);
