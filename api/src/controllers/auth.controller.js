const User = require("../models/User");

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // check if user exists
    if (!user) res.status(404).json({ message: "User not found" });

    // check if password is correct
    if (user.password !== password)
      res.status(401).json({ message: "Invalid password" });

    user.password = null;
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function register(req, res) {
  const { nickname, email, password } = req.body;

  try {
    const newUser = await User.create({ nickname, email, password });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { login, register };
