const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  // const token = req.headers.authorization;
  const token = req.header("x-auth-token");
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
