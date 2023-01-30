const mongoose = require("mongoose");
const Joi = require("joi");
const { isEmail } = require("validator");

const BrokerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter first name."],
  },
  lastName: {
    type: String,
    required: [true, "Please enter last name."],
  },
  email: {
    type: String,
    required: [true, "Please enter email."],
    validate: [isEmail, "Please enter valid email"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please enter a phone number."],
  },
  userId: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: false,
    max: [10, "Max rating is 10."],
    min: [1, "Minimum rating is 1."],
  },
  notes: {
    type: String,
    required: false,
  },
});

function validateBroker(broker) {
  const schema = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    userId: Joi.string().required(),
    rating: Joi.string().max(10).min(1),
    notes: Joi.string(),
  };
  return (result = Joi.validate(broker, schema));
}

module.exports.Broker = mongoose.model("Broker", BrokerSchema);
module.exports.validate = validateBroker;
