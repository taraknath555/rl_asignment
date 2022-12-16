const isLive = process.env.REACT_APP_ENV === "live";
const server = isLive
  ? process.env.REACT_APP_BACKEND_SERVER
  : "http://localhost:5000";

module.exports = {
  server: server,
};
