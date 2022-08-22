const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  phonenumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  bed: {
    type: String,
    required: true,
  },
  bath: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  approval_status: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("post", userSchema);
