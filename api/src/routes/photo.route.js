const Photo = require("../models/Photo");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const photos = await Photo.find();

  res.json(photos);
});

router.post("/upload", async (req, res) => {
  const { url, label } = req.body;

  try {
    const newPhoto = new Photo({
      link: url,
      label,
    });

    const savedPhoto = await newPhoto.save();

    res.json(savedPhoto);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
