require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  apiVersion: "v1"
});

async function testar() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "O que é JavaScript?"
    });

    console.log("RESPOSTA:");
    console.log(response.text);
  } catch (err) {
    console.error("🔥 ERRO DIRETO:");
    console.error(err);
  }
}

testar();
