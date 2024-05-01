const router = require("express").Router();

router.get("/hello", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
