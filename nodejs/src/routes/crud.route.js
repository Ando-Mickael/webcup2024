const router = require("express").Router();
const crudController = require("../controllers/crud.controller");

router.get("/:table", crudController.find);
router.get("/:table/:id", crudController.findOne);
router.post("/:table", crudController.create);
router.put("/:table/:id", crudController.update);
router.delete("/:table/:id", crudController.deleteOne);

module.exports = router;
