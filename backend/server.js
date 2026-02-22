const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/perguntar', async (req, res) => {
  const { pergunta } = req.body;
  if (!pergunta) {
    return res.status(400).json({ erro: 'Pergunta não fornecida.' });
  }
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    const result = await model.generateContent(pergunta);
    res.json({ resposta: result.response.text() });
  } catch (err) {
    console.error("ERRO GEMINI:", err);
    res.status(500).json({ erro: 'Erro ao consultar o oráculo.' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});