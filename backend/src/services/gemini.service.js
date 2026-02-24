/**
 * gemini.service.js
 *
 * Camada de serviço responsável por:
 * - Construir o prompt
 * - Definir parâmetros de geração
 * - Comunicar-se com a API do Gemini
 *
 * Esta camada abstrai a integração externa do restante da aplicação.
 */

const ai = require("../config/gemini.config");

/**
 * Envia uma pergunta ao modelo Gemini e retorna o texto gerado.
 *
 * @param {string} pergunta - Pergunta enviada pelo usuário
 * @returns {Promise<string>} - Resposta gerada pelo modelo
 */
async function perguntarAoGemini(pergunta) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `
    Você é um oráculo filosófico.

    Responda entre 60 e 90 palavras.
    Use no máximo 2 parágrafos curtos.
    Sem listas.
    Finalize com uma pergunta reflexiva.

    Pergunta: ${pergunta}
    `,
    config: {
      maxOutputTokens: 200,
      temperature: 0.85
    }
  });

  return String(response.text);
}

module.exports = { perguntarAoGemini };
