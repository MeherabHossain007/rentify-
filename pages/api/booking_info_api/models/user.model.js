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

  booknumber: {
    type: String,
    reuire: true,
  },
  phonenumber: {
    type: String,
    reuire: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("bookinfo", userSchema);
