/**
 * oraculo.controller.js
 *
 * Camada responsável por receber requisições HTTP,
 * validar dados de entrada e delegar a lógica para a camada de serviço.
 */

const { perguntarAoGemini } = require("../services/gemini.service");

/**
 * Controller responsável pelo endpoint de pergunta ao oráculo.
 *
 * Fluxo:
 * 1. Valida presença da pergunta
 * 2. Chama a camada de serviço
 * 3. Retorna resposta em JSON
 */
async function perguntar(req, res, next) {
  try {
    const { pergunta } = req.body;

    if (!pergunta) {
      return res.status(400).json({ erro: "Pergunta não fornecida." });
    }

    const resposta = await perguntarAoGemini(pergunta);

    res.json({ resposta });
  } catch (err) {
    next(err);
  }
}

module.exports = { perguntar };
