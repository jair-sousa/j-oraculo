const { perguntarAoGemini } = require("../services/gemini.service");

async function perguntar(req, res, next) {
  try {
    const { pergunta } = req.body;

    if (!pergunta) {
      return res.status(400).json({ erro: "Pergunta não fornecida." });
    }

    const resposta = await perguntarAoGemini(pergunta);

    res.json({ resposta });
  } catch (err) {
    next(err);
  }
}

module.exports = { perguntar };
