const express = require("express")
const joi = require("joi")
const bcrypt= require("bcrypt")
const User = require("../models/users")
const jwt=require("jsonwebtoken")
const router = express.Router()

const loginSchema = joi.object({
  email: joi.string().email().required().min(5),
  password: joi.string().required().min(5),
});

router.get("/", async (req, res) => {
    try {
        const { error } = loginSchema.validate(req.body);
        if (error) {
          return res.status(400).send("Wrong body");
        }

        let user = await User.findOne({ email: req.body.email });
        if (!user) {
          return res.status(404).send("Wrong email or password");
        }

        // check de password
        const checkResult = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (!checkResult)
          return res.status(400).send("Wrong email or password");

        //token
        const token= jwt.sign({_id:user._id, email:user.email},process.env.JWTKEY)
        res.status(200).send(token);
    } catch (error) {
        res.status(400).send(error);
        
    }
    
  
}

)



module.exports= router;