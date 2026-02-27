/**
 * oraculo.controller.js
 *
 * Camada responsável por receber requisições HTTP,
 * validar dados de entrada e delegar a lógica
 * para os serviços de IA.
 */

const { perguntarAoGemini } = require("../services/gemini.service");
const { perguntarOpenAI } = require("../services/openai.service");

/**
 * Controller responsável pelo endpoint de pergunta ao Oráculo.
 *
 * Fluxo:
 * 1. Valida a presença da pergunta
 * 2. Tenta obter resposta via OpenAI (principal)
 * 3. Em caso de falha, utiliza Gemini como fallback
 * 4. Retorna a resposta em formato JSON
 */
async function perguntar(req, res, next) {
  try {
    const { pergunta } = req.body;

    if (!pergunta) {
      return res.status(400).json({
        erro: "Pergunta não fornecida.",
      });
    }

    let resposta;

    try {
      /**
       * Provider principal: OpenAI
       */
      resposta = await perguntarOpenAI(pergunta);

    } catch (openaiError) {

      console.error(
        "Falha ao consultar OpenAI. Tentando Gemini...",
        openaiError.message
      );

      /**
       * Fallback: Gemini
       */
      resposta = await perguntarAoGemini(pergunta);
    }

    return res.json({ resposta });

  } catch (err) {
    next(err);
  }
}

module.exports = { perguntar };
