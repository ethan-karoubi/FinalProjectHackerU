const express = require("express");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const router = express.Router();

const registerSchema = joi.object({
  email: joi.string().required().min(5).email(),
  password: joi.string().required().min(5),
});

router.post("/", async (req, res) => {
  try {
    // joi validation
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).send("wrong Password or email");
    }
    //check for an existing user
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send("email already exists");
    }
    // encrypt the passeword

    //add document to db
    user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
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
