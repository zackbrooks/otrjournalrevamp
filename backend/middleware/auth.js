const jwt = require("jsonwebtoken");
const { rest } = require("lodash");

function auth(req, res, next) {
  const authheader = req.headers.authorization;
  if (!authheader) {
    return res.status(403).send("header does not exist");
  }
  const token = authheader.split(" ")[1];
  // const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).send("Access denied. No token provided mane");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("user verificed");
    next();
  } catch (error) {
    res.status(400).send("Access denied. Invalid token.");
  }
}

module.exports = auth;
