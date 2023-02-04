const { Broker, validate } = require("../models/Broker");
const _ = require("lodash");
const { errorFormatter, formatErrors } = require("../utils/index");

// @GET, get a specific broker created by a user
exports.getABroker = async (req, res) => {
  try {
    const broker = await Broker.findById(req.params.id);
    res.json(broker);
  } catch (err) {
    res.status(400).send({ error: err.errors[field].message });
  }
};

// @GET, get all brokers created by a user
exports.getBrokers = async (req, res) => {
  try {
    // if (!req.body.userId) throw Error("Access Denied");
    const allBrokers = await Broker.find({
      userId: "63d48272c8ad1d722139ed3d",
    });

    res.send(allBrokers);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

// @POST, create a broker
exports.createBroker = async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res
      .status(400)
      .send({ error: formatErrors(error.details, "mongo") });

  // req.body.userId = "63d48272c8ad1d722139ed3d";

  try {
    await Broker.create(
      _.pick(req.body, [
        "firstName",
        "lastName",
        "notes",
        "phoneNumber",
        "email",
        "userId",
        "rating",
      ])
    );
    res.send("Broker created");
  } catch (err) {
    formatErrors(err.errors, "mongo");
    res.status(400).send({ error: formatErrors(err.errors, "mongo") });
  }
};

// @post
// @/edit/id
// @posts updated info to the db
exports.updateBroker = async (req, res) => {
  console.log("ZZZZZZZZZZZZZ", req.body);
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    await Broker.validate(req.body);
    await Broker.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          userId: "63d48272c8ad1d722139ed3d",
          rating: req.body.rating,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          notes: req.body.notes,
        },
      }
    );
    res.json({ message: "broker updated" });
  } catch (err) {
    formatErrors(err);
  }
};

// @delete
// @/delete
// @deletes user
exports.deleteBroker = async (req, res) => {
  try {
    await Broker.findOneAndDelete({ _id: req.params.id });
    res.status(201).json({ message: "Deleted Broker" });
  } catch (error) {
    res.status(400).send("Deletion failed");
  }
};
