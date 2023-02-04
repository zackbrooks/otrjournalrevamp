const express = require("express");
const router = express.Router();
const compController = require("../controllers/company");

//Creates Company in DB
router.post("/create", compController.createCompany);

router.get("/allcompanys", compController.getCompanies);

router.get("/view/:id", compController.getACompany);

router.post("/edit/:id", compController.updateCompany);

router.delete("/delete/:id", compController.deleteCompany);

module.exports = router;
