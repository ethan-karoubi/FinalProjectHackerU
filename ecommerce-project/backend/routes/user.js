const express = require("express");
const joi = require("joi");
const bcrypt = require("bcrypt");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const router = express.Router();

const userSchema = joi.object({
  email: joi.string().email().required().min(5),
  password: joi.string().required().min(5),
});

router.get("/", async (req, res) => {
  try {
    const { error } = userSchema.validate(req.query);
    if (error) {
      return res.status(400).send("format not valid");
    }

    let user = await User.findOne({
      email: req.query.email,
    });
    if (!user) {
      return res.status(404).send("Wrong email ");
    }

    // check de password
    const checkResult = await bcrypt.compare(req.query.password, user.password);
    if (!checkResult) return res.status(400).send("Wrong  password");

    //token
    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWTKEY
    );
    res.status(200).send(token);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    // joi validation
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).send("wrong Password or email");
    }
    //check for an existing user
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send("email already exists");
    }
    // encrypt the password
    user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
    
    //add document to db
    await user.save();

    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWTKEY
    );
    res.status(200).send(token);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
