const prisma = require("../libs/prisma");

async function find(req, res) {
  const { table } = req.params;

  try {
    const data = await prisma[table].findMany();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function findOne(req, res) {
  const { table, id } = req.params;

  try {
    const obj = await prisma[table].findFirstOrThrow({
      where: {
        id: Number(id),
      },
    });

    res.json(obj);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function create(req, res) {
  const { table } = req.params;

  try {
    const newObj = await prisma[table].create({
      data: req.body,
    });

    res.json(newObj);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function update(req, res) {
  const { table, id } = req.params;

  try {
    const obj = await prisma[table].update({
      where: {
        id: Number(id),
      },
      data: req.body,
    });

    res.json(obj);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteOne(req, res) {
  const { table, id } = req.params;

  try {
    const obj = await prisma[table].delete({
      where: {
        id: Number(id),
      },
    });

    res.json(obj);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  find,
  findOne,
  create,
  update,
  deleteOne,
};
