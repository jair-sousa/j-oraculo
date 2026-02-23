const ai = require("../config/gemini.config");

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
