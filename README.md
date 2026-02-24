# 🔮 J_Oraculo

Backend e frontend integrados para geração de respostas filosóficas utilizando a API Google Gemini.  
O projeto foi desenvolvido com foco em arquitetura em camadas, controle de geração de tokens e organização modular.

---

## 📌 Objetivo do Projeto

Criar um “Oráculo Digital” capaz de:

- Gerar respostas filosóficas densas e provocativas
- Controlar tamanho da resposta
- Controlar parâmetros de geração (temperature, maxOutputTokens)
- Reduzir riscos de truncamento por limite de tokens
- Organizar backend em arquitetura escalável

O projeto também serve como estudo prático de:

- Integração com LLM
- Engenharia de prompt
- Estruturação de backend profissional
- Separação clara de responsabilidades

---

## 🏗 Arquitetura Backend

O backend segue arquitetura em camadas:

Request  
→ Route  
→ Controller  
→ Service  
→ Gemini API  
→ Response  

### Estrutura

backend/
 ├── src/
 │    ├── config/
 │    │     └── gemini.config.js
 │    ├── controllers/
 │    │     └── oraculo.controller.js
 │    ├── services/
 │    │     └── gemini.service.js
 │    ├── routes/
 │    │     └── oraculo.routes.js
 │    ├── middlewares/
 │    │     └── error.middleware.js
 │    └── server.js
 ├── .env
 ├── package.json

### Responsabilidades

- Config → instancia cliente Gemini
- Controller → valida requisição HTTP
- Service → constrói prompt e chama API
- Middleware → trata erros globais
- Server → inicializa aplicação

---

## 🤖 Integração com Gemini

Modelo atual:

gemini-2.0-flash

Configuração principal:

- maxOutputTokens: 200
- temperature: 0.85

Estratégia de prompt:

- Linguagem filosófica
- 2 parágrafos
- Sem listas
- Finalização com pergunta reflexiva
- Limite explícito de palavras

Motivação técnica:

- Evitar truncamento por MAX_TOKENS
- Reduzir consumo excessivo de thinking tokens
- Manter previsibilidade na resposta

---

## 🎤 Funcionalidades do Frontend

- Envio de perguntas via formulário
- Entrada por voz (Web Speech API)
- Barra de progresso durante geração
- Interface responsiva
- Comunicação assíncrona com backend via fetch

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado
- Chave da API Gemini

### Configuração

Crie um arquivo `.env` dentro da pasta `backend`:

GEMINI_API_KEY=sua_chave_aqui

### Instalação

cd backend  
npm install  
node server.js  

Abra `index.html` no navegador.

Servidor padrão:

http://localhost:3000

Endpoint principal:

POST /perguntar

Body esperado:

{
  "pergunta": "Sua pergunta aqui"
}

---

## 🛠 Tecnologias Utilizadas

Backend:
- Node.js
- Express
- Google Gemini API

Frontend:
- HTML
- CSS
- JavaScript Vanilla
- Web Speech API

---

## 📈 Próximos Passos (Evolução Arquitetural)

Planejamento de evolução do projeto:

- Implementação de cache para reduzir consumo da API
- Rate limiting para proteção contra abuso
- Fallback estratégico em caso de erro de quota
- Logs estruturados
- Testes automatizados
- Deploy em ambiente cloud (Render)
- Evolução para arquitetura escalável
- Possível transformação em micro SaaS

---

## 🎯 Objetivo Profissional

Este projeto foi desenvolvido como parte da construção de portfólio backend, com foco em:

- Boas práticas arquiteturais
- Separação de responsabilidades
- Integração com IA
- Controle de custo e geração

---

## 👨‍💻 Autor

Jair Sousa  
Estudante de Análise e Desenvolvimento de Sistemas  
Foco em Backend, Node.js e Arquitetura de Software
