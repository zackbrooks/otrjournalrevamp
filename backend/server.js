const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const error = require("./middleware/error");
const compRoutes = require("./routes/company");
const brokerRoutes = require("./routes/broker");

const PORT = process.env.PORT || 5000;

require("dotenv").config({ path: "./backend/config/.env" });

connectDB();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
// Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);

app.use(flash());

app.use("/api/users", mainRoutes);
app.use("/api/broker", brokerRoutes);
app.use("/api/company", compRoutes);

//server frontend
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, "../", "frontend", "build", "index.html")
//     )
//   );
// } else {
//   app.get("/", (req, res) => res.send("Please set to production"));
// }

// app.use(error);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
