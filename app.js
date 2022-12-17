const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bookRouter = require("./routes/bookRouter");
const magazineRouter = require("./routes/magazineRouter");
const path = require("path");

const app = express();

//Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const whitelist = ["http://localhost:3001", "http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

//Body parser, Reading data from the body into req.body
app.use(express.json({ limit: "10kb" }));

console.log(__dirname);

//Serving static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.use(express.static(`${__dirname}/public`));

//Routes

app.use("/api/v1/books", bookRouter);
app.use("/api/v1/magazines", magazineRouter);

// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

module.exports = app;
