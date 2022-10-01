const User = require("../models/userModel");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const authController = {
  registerUser: async (req, res) => {
    const { nickname, email, password } = req.body;
    try {
      const newUser = await User.create({
        nickname,
        email,
        password: bcrypt.hashSync(password, 8),
      });
      res.json(newUser);
    } catch (err) {
      res.status(500);
      if (err.code === 11000) {
        res.json({message: "email already exists"});
      } else {
        res.json(err);
      }
      
    }
  },
  signInUser: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({
      id: user._id,
      nickname: user.nickname,
      email: user.email,
      accessToken: token,
    });
  },
};


module.exports = authController;
