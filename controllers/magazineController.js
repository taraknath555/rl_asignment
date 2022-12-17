const magazineModel = require("../models/magazineModel");

exports.getMagazines = async (req, res, next) => {
  magazineModel
    .getMagazines(req)
    .then((magazines) =>
      res.status(200).json({
        status: "success",
        results: magazines.length,
        magazines,
      })
    )
    .catch(next);
};
