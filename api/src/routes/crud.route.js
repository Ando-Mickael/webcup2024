const router = require("express").Router();
const crudController = require("../controllers/crud.controller");

router.get("/:documentName", crudController.findAll);
router.get("/:documentName/:id", crudController.findOne);
router.post("/:documentName", crudController.create);
router.put("/:documentName/:id", crudController.updateOne);
router.delete("/:documentName/:id", crudController.deleteOne);

module.exports = router;
