const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/hello", (req, res) => {
  res.json({ message: "Hello" });
});

module.exports = router;
