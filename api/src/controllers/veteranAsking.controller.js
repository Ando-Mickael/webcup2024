const VecteranAsking = require("../models/VeteranAsking");

async function findAllPending(req, res) {
  try {
    const veteransAsking = await VecteranAsking.find({ status: "pending" });

    res.json(veteransAsking);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function create(req, res) {
  const { userId, fullname, teamName, edition, link } = req.body;
  try {
    const newAsking = new VecteranAsking({
      userId,
      fullname,
      teamName,
      edition,
      link,
    });

    const createdVeteranAsking = await newAsking.save();

    res.json(createdVeteranAsking);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  findAllPending,
  create,
};
