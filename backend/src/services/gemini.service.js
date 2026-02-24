/**
 * gemini.service.js
 *
 * Camada de serviço responsável por:
 * - Construir o prompt do oráculo
 * - Definir parâmetros de geração
 * - Comunicar-se com a API do Gemini
 * - Implementar fallback em caso de indisponibilidade
 *
 * Foco atual:
 * - Respostas concisas
 * - Alta densidade semântica
 * - Controle de tokens
 * - Resiliência básica (fallback para quota excedida)
 */

const ai = require("../config/gemini.config");

/**
 * Constrói o prompt base do oráculo.
 * Separar essa responsabilidade facilita ajustes futuros
 * e possível evolução para um prompt builder dedicado.
 *
 * @param {string} pergunta
 * @returns {string}
 */
function construirPrompt(pergunta) {
  return `
Você é um oráculo filosófico conciso e enigmático.

Responda de forma densa e simbólica.
Use no máximo 80 palavras.
Use no máximo 2 parágrafos curtos.
Nunca utilize listas, tópicos ou numeração.
Evite explicações didáticas ou exemplos.
Finalize obrigatoriamente com uma pergunta reflexiva.

Pergunta: ${pergunta}
`;
}

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
 * Estratégia de otimização:
 * - Redução de temperatura para evitar expansão excessiva
 * - Redução de maxOutputTokens para forçar concisão
 * - Tratamento específico para erro 429 (quota excedida)
 *
 * @param {string} pergunta
 * @returns {Promise<string>}
 */
async function perguntarAoGemini(pergunta) {
  const prompt = construirPrompt(pergunta);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        maxOutputTokens: 110,
        temperature: 0.65
      }
    });

    return String(response.text).trim();

  } catch (error) {

    /**
     * Tratamento específico para quota excedida (HTTP 429).
     * Ativa fallback sem derrubar o sistema.
     */
    if (error?.status === 429 || error?.error?.code === 429) {
      console.warn("Quota excedida. Fallback ativado.");
      return gerarRespostaFallback();
    }

    /**
     * Outros erros continuam sendo tratados
     * pelo middleware global.
     */
    throw error;
  }
}

module.exports = { perguntarAoGemini };
