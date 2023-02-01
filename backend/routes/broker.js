const express = require("express");
const router = express.Router();
const brokerController = require("../controllers/broker");

//Creates Broker in DB
router.post("/create", brokerController.createBroker);
//Sends all brokers to the user
router.get("/allbrokers", brokerController.getBrokers);
// //Gets this specific broker and sends it to the user
router.get("/viewone/:id", brokerController.getABroker);
// //Posts the updated data for a specific Broker to the DB
router.post("/edit/:id", brokerController.updateBroker);
// //Deletes a specific Broker from the DB
router.delete("/delete/:id", brokerController.deleteBroker);
module.exports = router;
