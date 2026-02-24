/**
 * oraculo.routes.js
 *
 * Define as rotas relacionadas ao Oráculo.
 * Mantém a organização do servidor desacoplada da lógica de negócio.
 */

const express = require("express");
const { perguntar } = require("../controllers/oraculo.controller");

const router = express.Router();

/**
 * POST /perguntar
 * Endpoint responsável por enviar uma pergunta ao oráculo.
 */
router.post("/perguntar", perguntar);

module.exports = router;
