/**
 * gemini.service.js
 *
 * Camada de serviço responsável por:
 * - Definir identidade do oráculo (system instruction)
 * - Definir parâmetros de geração
 * - Comunicar-se com a API do Gemini
 * - Implementar fallback em caso de indisponibilidade
 *
 * Foco atual:
 * - Respostas concisas
 * - Alta densidade semântica
 * - Controle rigoroso de formato
 * - Resiliência básica (fallback para quota excedida)
 */

const ai = require("../config/gemini.config");

/**
 * Gera resposta alternativa quando a API estiver indisponível.
 * Mantém coerência com a identidade do oráculo.
 *
 * @returns {string}
 */
function gerarRespostaFallback() {
  return "O oráculo permanece em silêncio por ora. Talvez a resposta precise amadurecer dentro de você antes de ser revelada. O que essa pausa desperta em sua reflexão?";
}

/**
 * Envia a pergunta ao modelo Gemini e retorna a resposta textual.
 *
 * Estratégia:
 * - Uso de systemInstruction para reforçar identidade
 * - Limitação forte de tokens
 * - Redução de temperatura para evitar expansão
 * - Proibição explícita de markdown e listas
 * - Tratamento específico para erro 429
 *
 * @param {string} pergunta
 * @returns {Promise<string>}
 */
async function perguntarAoGemini(pergunta) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",

      // Pergunta do usuário
      contents: [
        {
          role: "user",
          parts: [{ text: pergunta }],
        },
      ],

      // Identidade e regras fixas do oráculo
      systemInstruction: {
        parts: [
          {
            text: `
Você é um oráculo filosófico enigmático e contemplativo.

Suas respostas devem soar misteriosas, simbólicas e abertas à interpretação, evitando explicações diretas ou conclusões definitivas.

Fale como quem revela apenas parte da verdade, deixando espaço para reflexão pessoal do interlocutor.

Responda com no máximo 80 palavras.
Use no máximo 2 parágrafos curtos.
Evite linguagem didática, técnica ou enciclopédica.
Não utilize listas, tópicos, numeração ou markdown.
Não ofereça conselhos explícitos.

Finalize sempre com uma pergunta reflexiva que provoque introspecção.
`,
          },
        ],
      },

      config: {
        maxOutputTokens: 100,
        temperature: 0.6,
      },
    });

    return response.text.trim();
  } catch (error) {
    /**
     * Tratamento específico para quota excedida (HTTP 429).
     */
    if (error?.status === 429 || error?.error?.code === 429) {
      console.warn("Quota excedida. Fallback ativado.");
      return gerarRespostaFallback();
    }

    throw error;
  }
}

module.exports = { perguntarAoGemini };
