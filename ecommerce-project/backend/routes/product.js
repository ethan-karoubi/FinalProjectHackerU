const express = require("express");
const Product = require("../models/product");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let allProducts = await Product.find();
    res.status(200).send(allProducts);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    // const {error} = productSchema.validate(req.body);
    // if (error) return res.status(400).send('error')
    let product = await Product.findOne({ _id: req.params.id });
    console.log(req.params.id, product);
    if (product) return res.status(200).send(product);
    else throw new Error();
  } catch (error) {
    res.status(400).send("product with this id  doesn't exist");
  }
});
router.get("/:category", (req, res) => {
  try {
    let;
  } catch (error) {}
});

module.exports = router;
