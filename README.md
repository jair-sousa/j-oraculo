# 🔮 J_Oraculo

O **J_Oraculo** é uma aplicação fullstack baseada em **Large Language Models (LLMs)** capaz de gerar respostas filosóficas reflexivas através de uma arquitetura cognitiva desacoplada de provedores de Inteligência Artificial.

O projeto evoluiu de uma aplicação em JavaScript puro para uma arquitetura moderna distribuída, seguindo princípios reais de engenharia de software, separação de responsabilidades e deploy contínuo em cloud.

---

## 🌐 Aplicação em Produção

Frontend (Vercel)  
👉 https://j-oraculo.vercel.app  

Backend (Render)  
👉 https://j-oraculo-backend.onrender.com  

Health Check  
👉 https://j-oraculo-backend.onrender.com/health  

---

## 🎯 Objetivo do Projeto

Criar um **Oráculo Digital** capaz de:

- Gerar respostas filosóficas densas e reflexivas
- Manter identidade comportamental consistente
- Controlar consumo de tokens
- Garantir previsibilidade textual
- Operar com múltiplos provedores de IA
- Aplicar arquitetura fullstack escalável

O projeto também serve como estudo prático de:

- Integração com LLMs
- Engenharia de Prompt
- Arquitetura Backend
- Frontend moderno com Next.js
- Deploy distribuído em cloud

---

## 🏗 Arquitetura Atual

```
Frontend (Next.js - Vercel)
        ↓
Backend API (Node.js + Express - Render)
        ↓
AI Cognitive Layer
        ├── Google Gemini
        └── OpenAI GPT
```

---

## 🧠 Camada Cognitiva do Oráculo

O J-Oráculo utiliza uma arquitetura **provider-agnostic**, onde a identidade da IA é independente do modelo utilizado.

A personalidade do Oráculo é definida por uma **Persona Cognitiva centralizada**, garantindo consistência mesmo com múltiplos provedores.

### Componentes Cognitivos

- **Persona** → identidade filosófica do Oráculo
- **AI Services** → comunicação com provedores
- **Formatter** → normalização textual das respostas
- **Fallback** → resiliência em falhas de provider

Fluxo interno:

```
Request
 → Route
 → Controller
 → AI Service
 → Provider (Gemini | OpenAI)
 → Text Formatter
 → Response
```

---

## 🧩 Estrutura do Projeto

```
J-ORACULO/
│
├── backend/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── routes/
│       ├── services/
│       ├── prompts/
│       ├── fallback/
│       ├── utils/
│       └── server.js
│
├── frontend/
├── legacy/
└── README.md
```

---

## ⚙️ Backend

O backend segue arquitetura em camadas:

```
HTTP Request
 → Route
 → Controller
 → Service
 → Provider IA
 → Formatter
 → HTTP Response
```

### Responsabilidades

- **Config** → instancia clientes de IA
- **Controller** → valida requisições HTTP
- **Service** → comunicação com IA
- **Persona** → identidade cognitiva
- **Fallback** → resiliência
- **Middleware** → tratamento global de erros
- **Server** → inicialização da aplicação

---

## 🤖 Integração com Inteligência Artificial

Provedores suportados:

- **Google Gemini** (`gemini-2.0-flash`)
- **OpenAI GPT** (`gpt-4o-mini`)

Características aplicadas:

- Prompt Engineering centralizado
- Controle de tamanho de resposta
- Redução de consumo de tokens
- Identidade comportamental persistente
- Independência de provider

---

## 🎨 Frontend

Tecnologias utilizadas:

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Feature-based architecture

Funcionalidades:

- Envio manual de perguntas
- Reconhecimento de voz (Web Speech API)
- Histórico em memória
- Estados de loading
- Tratamento de erros
- Comunicação assíncrona com backend

---

## 🧱 Infraestrutura

- Deploy Frontend: **Vercel**
- Deploy Backend: **Render**
- Endpoint `/health` para monitoramento
- Keep-alive contra cold start
- CI/CD automático via GitHub
- Ambiente distribuído em cloud

---

## 🧩 Princípios Arquiteturais Aplicados

- Separation of Concerns
- Clean Architecture
- Provider-Agnostic AI Integration
- Prompt Engineering Centralizado
- Resiliência via Fallback
- Deploy Contínuo (CI/CD)

---

## 🗃 Frontend Legado

A primeira versão do projeto foi desenvolvida utilizando:

- HTML
- CSS
- JavaScript Vanilla

Após migração para Next.js, essa versão foi arquivada em:

```
/legacy
```

Mantida para fins históricos e análise evolutiva do projeto.

---

## 🚀 Executar Localmente

### Backend

```bash
cd backend
npm install
npm run dev
```

Servidor disponível em:

```
http://localhost:3000
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicação disponível em:

```
http://localhost:3000
```

---

## 📈 Evolução Planejada

Próximas etapas arquiteturais:

- Persistência de conversas
- Memória conversacional IA
- Autenticação de usuários
- Streaming de respostas
- Rate limiting
- Observabilidade
- Logs estruturados
- Transformação em Micro SaaS

---

## 👨‍💻 Autor

**Jair Sousa**  
Tecnólogo em Análise e Desenvolvimento de Sistemas  

Foco em:

- Backend Development
- Node.js
- Arquitetura de Software
- Integração com Inteligência Artificial
- Sistemas baseados em LLM
