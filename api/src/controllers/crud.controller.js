const { getModel } = require("../libs/db");

async function findAll(req, res) {
  const { documentName } = req.params;

  try {
    const Model = getModel(documentName);
    const data = await Model.find();

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function findOne(req, res) {
  const { documentName, id } = req.params;

  try {
    const Model = getModel(documentName);
    const data = await Model.findById(id);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function create(req, res) {
  const { documentName } = req.params;

  try {
    const Model = getModel(documentName);
    const data = await Model.create(req.body);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function updateOne(req, res) {
  const { documentName, id } = req.params;

  try {
    const Model = getModel(documentName);
    const data = await Model.findByIdAndUpdate(id, req.body);

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    const newData = await Model.findById(id);

    res.json(newData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function deleteOne(req, res) {
  const { documentName, id } = req.params;

  try {
    const Model = getModel(documentName);
    const data = await Model.findById(id);

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    await Model.deleteOne({ _id: id });

    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  findAll,
  findOne,
  create,
  updateOne,
  deleteOne,
};
