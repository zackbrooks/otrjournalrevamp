const { User, validate } = require("../models/User");
const _ = require("lodash");
const Joi = require("joi");
const { JSONCookie } = require("cookie-parser");

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  const { error } = validate(req.body);
  if (error) return res.status(400).send("Invalid email or password.");

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(400).send("Invalid email or password.");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    return res.status(400).send("Invalid email or password.");
  }

  const token = user.createJWT();
  res.send({ id: user._id, token });
};

exports.postSignup = async (req, res, next) => {
  const { email, password } = req.body;
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let user = await User.findOne({ email });
  if (user)
    return res
      .status(400)
      .send("Account with that email address already exists");
  try {
    const user2 = await User.create({
      email,
      password,
    });

    res.send(_.pick(user2, ["_id", "email"]));
  } catch (err) {
    for (field in err.errors) console.log(err.errors[field].message);
    // res.status(400).send(err.message);
  }
};
