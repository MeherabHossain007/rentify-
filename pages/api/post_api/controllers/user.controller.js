const { v4: uuidv4 } = require("uuid");

const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      phonenumber: req.body.phonenumber,
      email: req.body.email,
      address: req.body.address,
      location: req.body.location,
      bed: req.body.bed,
      bath: req.body.bath,
      area: req.body.area,
      status: req.body.status,
      price: req.body.price,
      type: req.body.type,
      description: req.body.description,
      approval_status:req.body.approval_status
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    user.name = req.body.name;
    user.phonenumber= req.body.phonenumber,
    user.email = req.body.email;
    user.address= req.body.address;
    user.location= req.body.location;
    user.bed= req.body.bed;
    user.bath= req.body.bath;
    user.area= req.body.area;
    user.status= req.body.status;
    user.price= req.body.price;
    user.type= req.body.type;
    user.description= req.body.description;
    user.approval_status=req.body.approval_status;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
    res.status(200).json({ message: "user is deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
