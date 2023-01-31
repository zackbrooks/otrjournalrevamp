const express = require("express");
const router = express.Router();
const loadController = require("../controllers/load");

//Creates Company in DB
router.post("/create", loadController.createLoad);

router.get("/allloads", loadController.getLoads);

router.get("/view/:id", loadController.getALoad);

router.post("/edit/:id", loadController.updateLoad);

router.delete("/delete", loadController.deleteLoad);

module.exports = router;
