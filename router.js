const { Router } = require("express")
const Services = require('./services')


const router = Router();

router.post(
  "/one-way",
  Services.oneWay
);
router.post(
  "/round-trip",
  Services.roundTrip
);

module.exports = router