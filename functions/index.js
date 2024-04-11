const express = require("express");
const app = express();
const cors = require("cors");
const functions = require("firebase-functions");
const authMiddleware = require("./database/middleware/authMiddleware");
const custom = require("./custom");
const Blogs = require("./routes/blogs");
const Author = require("./routes/author");
const Tags = require("./routes/tags");
const Topics = require("./routes/topics");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});
app.use(authMiddleware);

app.use("/custom", custom);

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.use("/blogs", Blogs);
app.use("/author", Author);
app.use("/tags", Tags);
app.use("/topics", Topics);

exports.app = functions.https.onRequest(app);