/**
 * text.formatter.js
 *
 * Normaliza respostas retornadas pelos providers de IA.
 */

function normalizarResposta(texto) {
  return texto
    .replace(/\n+/g, "\n\n")
    .trim();
}

module.exports = { normalizarResposta };
