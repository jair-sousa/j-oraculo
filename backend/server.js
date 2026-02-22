require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  apiVersion: "v1"
});

app.post("/perguntar", async (req, res) => {
  const { pergunta } = req.body;

  if (!pergunta) {
    return res.status(400).json({ erro: "Pergunta não fornecida." });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: pergunta
    });

    res.json({ resposta: response.text });

  } catch (err) {
    console.error("ERRO GEMINI:", err);
    res.status(500).json({ erro: "Erro ao consultar o oráculo." });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
