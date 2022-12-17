const isLive = process.env.REACT_APP_ENV === "live";
const server = isLive
  ? "https://yellow-agouti-gear.cyclic.app"
  : "http://localhost:5000";

module.exports = {
  server: server,
};
