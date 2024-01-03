const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

var cookieParser = require("cookie-parser");

dotenv.config({ path: "./config.env" });

require("./db/conn");

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;
// // const HOST = process.env.HOST;
// // const MONGO_URI = process.env.MONGO_URI;
// const URL = process.env.MONGO_URL;

// mongoose
//   //   .connect("mongodb://localhost:27017/IT_CRS_DEV", {
//   .connect(URL, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then((db) => console.log("db connected"))
//   .catch((err) => console.log(err));

const allowedOrigins = [
  "https://hirefrenzy.netlify.app",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin is in the allowed origins or if it's not defined (e.g., from server-side)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // if you need to handle credentials (cookies, authorization headers)
  })
);
app.use(require("./router/auth"));
app.use(require("./api/jobOpening"));
app.use(require("./api/updateData"));
app.use(require("./api/notification"));
app.use(require("./api/password"));
app.use(require("./api/jobArchive"));
app.use(require("./api/company"));
app.use(require("./api/application"));
app.use(require("./api/verification"));
app.get("/", (req, res) => {
  res.send("hello user");
});

app.listen(PORT, () => {
  console.log(`server at ${PORT}`);
});
