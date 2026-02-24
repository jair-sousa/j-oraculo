/**
 * gemini.config.js
 *
 * Responsável por configurar e instanciar o cliente do Google Gemini.
 * Centraliza a dependência externa de IA, permitindo reutilização
 * e facilitando manutenção ou troca futura de provedor.
 */

const { GoogleGenAI } = require("@google/genai");

/**
 * Instância única do cliente Gemini.
 * A API Key é carregada a partir das variáveis de ambiente.
 */
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  apiVersion: "v1"
});

module.exports = ai;
