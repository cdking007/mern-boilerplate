const express = require("express");
const router = express.Router();
const User = require("../models/user");
const auth = require("../middlewares/auth");

router.post("/users/register", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    return res.status(201).send(user);
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.post("/users/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .send({ Error: "Email and password both field required" });
  }

  const user = await User.getCrenetialDetails(email, password);
  if (!user) {
    return res.status(400).send("Invalid Credintial Details");
  }

  const token = await user.generateAuthToken();
  return res.status(200).send({ user, token });
});

router.post("/users/logout", auth, async (req, res) => {
  req.user.tokens = req.user.tokens.filter((token) => {
    return token.token !== req.token;
  });
  await req.user.save();
  res.status(200).send({ msg: "Logout success!" });
});

router.post("/users/logout/all", auth, async (req, res) => {
  req.user.tokens = [];
  await req.user.save();
  return res.send({ msg: "Logged out from all devices" });
});

module.exports = router;
