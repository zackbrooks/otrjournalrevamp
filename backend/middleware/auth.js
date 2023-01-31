const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).send("Access denied. No token provided");
  const accessToken = authHeader.split(" ")[1];
  if (!accessToken)
    return res.status(401).send("Access denied. No token provided mane");

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("user verificed");
    next();
  } catch (error) {
    res.status(400).send("Access denied. Invalid token.");
  }
}

module.exports = auth;
