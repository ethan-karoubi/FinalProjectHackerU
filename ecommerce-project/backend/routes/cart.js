const express = require("express");
const joi = require("joi");
const Cart = require("../models/cart");
const User = require("../models/users");
// const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");
const router = express.Router();

const productSchema = joi.object({
  name: joi.string().required().min(2),
  price: joi.number().required(),
  category: joi.string().required().min(2),
  image: joi.string().required().min(2),
  _id: joi.string(),
  __v: joi.string(),
});

const userIdSchema = joi.object({
  userId: joi.string().required(),
});

router.get("/", auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({
      userId: req.payload._id,
      active: true,
    });
    if (!cart) res.status(404).send("no cart for this user");
    res.status(200).send(cart.products);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/", auth, async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) return res.status(400).send({ error });
    let cart = await Cart.findOne({ userId: req.payload._id, active: true });
    if (!cart) res.status(404).send("no cart for this user");
    else {
      cart.products.push(req.body);
      await cart.save();
      res.status(201).send(cart);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    console.log(req.payload._id);
    let user = await User.findOne({ _id: req.payload._id });
    if (!user) res.status(404).send("no user found");

    let cart = new Cart({
      userId: req.payload._id,
      active: true,
      products: [],
    });
    await cart.save();
    res.status(201).send(cart);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
