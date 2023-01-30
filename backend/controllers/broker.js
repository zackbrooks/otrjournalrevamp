const { Broker, validate } = require("../models/Broker");
const _ = require("lodash");

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
    const allBrokers = await Broker.find({ userId: req.body.userId });

    res.send({
      allBrokers,
    });
  } catch (err) {
    console.log("whathathh");
    res.status(400).send({ error: err.errors[field].message });
  }
};

// @POST, create a broker
exports.createBroker = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
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
    let errArr = [];
    for (field in err.errors) {
      errArr.push(err.errors[field].message);
    }
    res.status(400).send({ error: errArr });
  }
};

// @post
// @/edit/id
// @posts updated info to the db
exports.updateBroker = async (req, res) => {
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
          userId: req.body.id,
          rating: req.body.rating,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          notes: req.body.notes,
        },
      }
    );
    res.json({ message: "broker updated" });
  } catch (err) {
    let errArr = [];
    for (field in err.errors) {
      errArr.push(err.errors[field].message);
    }
    res.status(400).send({ error: errArr });
  }
};

// @delete
// @/delete
// @deletes user
exports.deleteBroker = async (req, res) => {
  try {
    await Broker.findOneAndDelete({ _id: req.body.brokerId });
    res.status(201).json({ message: "Deleted Broker" });
  } catch (error) {
    res.status(400).send("Deletion failed");
  }
};
