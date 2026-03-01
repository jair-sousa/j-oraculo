/**
 * openai.service.js
 *
 * Serviço responsável pela comunicação com a API OpenAI.
 * Utiliza persona cognitiva compartilhada do Oráculo.
 */

const OpenAI = require("openai");
const { ORACLE_PERSONA } = require("../prompts/oracle.persona");
const {
  gerarRespostaFallback,
} = require("../fallback/oracle.fallback");
const {
  normalizarResposta,
} = require("../utils/text.formatter");

/**
 * Cliente OpenAI configurado via variável de ambiente.
 */
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Envia pergunta ao modelo OpenAI.
 *
 * @param {string} pergunta
 * @returns {Promise<string>}
 */
async function perguntarOpenAI(pergunta) {
  try {
    const completion =
      await openai.chat.completions.create({
        model: "gpt-4o-mini",

        messages: [
          {
            role: "system",
            content: ORACLE_PERSONA,
          },
          {
            role: "user",
            content: pergunta,
          },
        ],

        max_tokens: 100,
        temperature: 0.6,
      });

    const resposta =
      completion.choices[0].message.content;

    console.log("[AI] OpenAI respondeu");

    return normalizarResposta(resposta);

  } catch (error) {
    console.error("[OpenAI] Erro:", error.message);

    return gerarRespostaFallback();
  }
}

module.exports = { perguntarOpenAI };
