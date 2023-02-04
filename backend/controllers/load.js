const { Load, validate } = require("../models/Load");
const _ = require("lodash");

exports.createLoad = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    await Load.create(
      _.pick(req.body, [
        "userId",
        "bol",
        "name",
        "originName",
        "originAddress",
        "originType",
        "originTrailer",
        "originPUStart",
        "originPUEnd",
        "originMiles",
        "destinationName",
        "destinationAddress",
        "destinationType",
        "destinationTrailer",
        "destinationPUStart",
        "destinationPUEnd",
        "destinationMiles",
        "payment",
        "notes",
        "completed",
      ])
    );
    res.send("Load created");
  } catch (err) {
    let errArr = [];
    for (field in err.errors) {
      errArr.push(err.errors[field].message);
    }
    res.status(400).send({ error: errArr });
  }
};

// @GET, get all loads created by a user
exports.getLoads = async (req, res) => {
  try {
    const loads = await Load.find({ userId: req.body.userId });

    res.send({
      loads,
    });
  } catch (err) {
    // console.log("ZZZZZZZZZZZZ", err);
    res.status(400).send({ error: err.errors[fields].message });
  }
};

// @GET, get a specific load created by a user
exports.getALoad = async (req, res) => {
  try {
    const load = await Load.findById(req.params.id);
    res.json(load);
  } catch (err) {
    res.status(400).send({ error: err.errors[field].message });
  }
};

// @post
// @/edit/id
// @posts updated info to the db
exports.updateLoad = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    await Load.validate(req.body);
    await Load.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          userId: req.body.id,
          bol: req.body.bol,
          name: req.body.name,
          originName: req.body.originName,
          originAddress: req.body.originAddress,
          originType: req.body.originType,
          originTrailer: req.body.originTrailer,
          originPUStart: req.body.originPUStart,
          originPUEnd: req.body.originPUEnd,
          originMiles: req.body.originMiles,
          destinationName: req.body.destinationName,
          destinationAddress: req.body.destinationAddress,
          destinationType: req.body.destinationType,
          destinationTrailer: req.body.destinationTrailer,
          destinationPUStart: req.body.destinationPUStart,
          destinationPUEnd: req.body.destinationPUEnd,
          destinationMiles: req.body.destinationMiles,
          payment: req.body.payment,
          notes: req.body.notes,
          completed: req.body.completed,
        },
      }
    );
    res.json({ message: "load updated" });
  } catch (err) {
    let errArr = [];
    for (field in err.errors) {
      errArr.push(err.errors[field].message);
    }
    res.status(400).send({ error: errArr });
  }
};

exports.deleteLoad = async (req, res) => {
  try {
    await Load.findOneAndDelete({ _id: req.params.id });
    res.status(201).json({ message: "Deleted Load" });
  } catch (error) {
    res.status(400).send("Deletion failed");
  }
};
