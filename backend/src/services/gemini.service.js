/**
 * gemini.service.js
 *
 * Serviço responsável pela comunicação com o provider Gemini.
 * Aplica persona cognitiva do Oráculo e normaliza respostas.
 */

const ai = require("../config/gemini.config");
const { ORACLE_PERSONA } = require("../prompts/oracle.persona");
const {
  gerarRespostaFallback,
} = require("../fallback/oracle.fallback");
const {
  normalizarResposta,
} = require("../utils/text.formatter");

/**
 * Envia pergunta ao Gemini.
 *
 * @param {string} pergunta
 * @returns {Promise<string>}
 */
async function perguntarAoGemini(pergunta) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",

      contents: [
        {
          role: "user",
          parts: [{ text: pergunta }],
        },
      ],

      systemInstruction: {
        parts: [{ text: ORACLE_PERSONA }],
      },

      config: {
        maxOutputTokens: 100,
        temperature: 0.6,
      },
    });

    const resposta = response.text;

    console.log("[AI] Gemini respondeu");

    return normalizarResposta(resposta);

  } catch (error) {
    console.error("[Gemini] Erro:", error.message);

    return gerarRespostaFallback();
  }
}

module.exports = { perguntarAoGemini };
