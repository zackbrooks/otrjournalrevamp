module.exports = function (err, req, res, next) {
  console.log(err.code);
  res.status(400).send("Error, user not created, try again later");
};
