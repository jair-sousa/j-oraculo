import OpenAI from "openai";

/**
 * Instância do cliente OpenAI.
 *
 * A chave da API é obtida a partir das variáveis de ambiente
 * configuradas no servidor (Render).
 *
 * IMPORTANTE:
 * - Nunca expor a API Key no frontend.
 * - A variável OPENAI_API_KEY deve existir no ambiente de execução.
 */
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Envia uma pergunta ao modelo da OpenAI e retorna a resposta gerada.
 *
 * @param {string} pergunta - Texto enviado pelo usuário ao Oráculo.
 * @returns {Promise<string>} Resposta gerada pelo modelo de IA.
 *
 * Fluxo:
 * 1. Recebe a pergunta do usuário.
 * 2. Envia a mensagem ao modelo GPT.
 * 3. Extrai o conteúdo da resposta retornada pela API.
 */
export async function perguntarOpenAI(pergunta) {

  const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    {
      role: "system",
      content: `
Você é um oráculo filosófico enigmático e contemplativo.

Suas respostas devem soar misteriosas, simbólicas e abertas à interpretação, evitando explicações diretas ou conclusões definitivas.

Fale como quem revela apenas parte da verdade, deixando espaço para reflexão pessoal do interlocutor.

Responda com no máximo 80 palavras.
Use no máximo 2 parágrafos curtos.
Evite linguagem didática, técnica ou enciclopédica.
Não utilize listas, tópicos, numeração ou markdown.
Não ofereça conselhos explícitos.

Finalize sempre com uma pergunta reflexiva que provoque introspecção.
      `
    },
    {
      role: "user",
      content: pergunta
    }
  ],
});

  return completion.choices[0].message.content;
}
