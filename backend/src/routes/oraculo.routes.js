const express = require("express");
const { perguntar } = require("../controllers/oraculo.controller");

const router = express.Router();

router.post("/perguntar", perguntar);

module.exports = router;
