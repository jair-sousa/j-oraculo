/**
 * test-gemini.js
 *
 * Script isolado para teste direto da API do Google Gemini.
 *
 * Objetivo:
 * - Validar se a API Key está funcionando
 * - Testar conectividade com o modelo
 * - Verificar comportamento bruto da resposta
 * - Depurar erros sem passar pela arquitetura da aplicação
 *
 * Este arquivo não faz parte do fluxo principal do backend.
 * É utilizado apenas para testes e diagnóstico.
 */

require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

/**
 * Instancia o cliente Gemini utilizando
 * a chave definida nas variáveis de ambiente.
 */
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  apiVersion: "v1"
});

/**
 * Executa uma chamada simples ao modelo
 * para validar funcionamento da API.
 *
 * Fluxo:
 * 1. Envia uma pergunta simples
 * 2. Exibe a resposta no console
 * 3. Captura e exibe possíveis erros
 */
async function testar() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "O que é JavaScript?"
    });

    console.log("RESPOSTA:");
    console.log(response.text);
  } catch (err) {
    console.error("ERRO NA CHAMADA DIRETA AO GEMINI:");
    console.error(err);
  }
}

testar();
