const dotenv = require("dotenv");
const seeder = require("./seeder");

//Connecting to load Environment variables. must load before requiring app
//so that process.env should available to all the files
dotenv.config({ path: "./config.env" });

process.on("uncaughtException", (err) => {
  console.log(err);
  //   console.log(err.name, err.message);
  console.log("Uncaught Exception, Shutting down...");
  process.exit(1);
});

const app = require("./app");
const port = process.env.PORT || 5000;

//seed data from csv files
seeder();

//Starting Server
const server = app.listen(port, "127.0.0.1", () => {
  console.log(`Server started on port: ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Rejection, Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
