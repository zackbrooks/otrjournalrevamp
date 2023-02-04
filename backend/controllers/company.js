const { Company, validate } = require("../models/Company");
const _ = require("lodash");

exports.createCompany = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    await Company.create(
      _.pick(req.body, [
        "name",
        "location",
        "notes",
        "phoneNumber",
        "email",
        "userId",
        "routing",
        "rating",
        "type",
      ])
    );
    res.send("Company created");
  } catch (err) {
    let errArr = [];
    for (field in err.errors) {
      errArr.push(err.errors[field].message);
    }
    res.status(400).send({ error: errArr });
  }
};

// @GET, get all brokers created by a user
exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find({
      userId: "63d48272c8ad1d722139ed3d",
    });
    res.send(companies);
  } catch (err) {
    res.status(400).send({ error: err.errors[field].message });
  }
};

// @GET, get a specific broker created by a user
exports.getACompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    res.json(company);
  } catch (err) {
    res.status(400).send({ error: err.errors[field].message });
  }
};

// @post
// @/edit/id
// @posts updated info to the db
exports.updateCompany = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    await Company.validate(req.body);
    await Company.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          userId: req.body.id,
          rating: req.body.rating,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          notes: req.body.notes,
          routing: req.body.routing,
          location: req.body.location,
        },
      }
    );
    res.json({ message: "company updated" });
  } catch (err) {
    let errArr = [];
    for (field in err.errors) {
      errArr.push(err.errors[field].message);
    }
    res.status(400).send({ error: errArr });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    await Company.findOneAndDelete({ _id: req.params.id });
    res.status(201).json({ message: "Deleted Company" });
  } catch (error) {
    res.status(400).send("Deletion failed");
  }
};
