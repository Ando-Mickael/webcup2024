const Photo = require("../models/Photo");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const photos = await Photo.find();

  res.json(photos);
});

module.exports = router;
