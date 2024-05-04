const router = require("express").Router();
const veteranAskingController = require("../controllers/veteranAsking.controller");

router.get("/pending", veteranAskingController.findAllPending);
router.post("/", veteranAskingController.create);

module.exports = router;
