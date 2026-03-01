# 🔮 J_Oráculo

O **J_Oráculo** é uma aplicação Fullstack baseada em **Large Language Models (LLMs)** projetada como uma **Consciência Artificial Temática**, capaz de interpretar perguntas humanas e gerar respostas filosóficas reflexivas.

Diferente de chatbots tradicionais, o sistema não busca responder objetivamente, mas reinterpretar questões através de uma identidade cognitiva consistente definida por engenharia de prompt e arquitetura desacoplada de provedores de Inteligência Artificial.

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

Construir um **Oráculo Digital** capaz de:

- Interpretar perguntas como metáforas existenciais
- Manter identidade cognitiva persistente
- Operar com múltiplos provedores de IA
- Controlar consumo de tokens
- Garantir previsibilidade comportamental
- Aplicar arquitetura fullstack escalável

O projeto também funciona como estudo prático de:

- Integração com LLMs
- Prompt Engineering
- Arquitetura Backend
- Human–AI Interaction
- Deploy distribuído em cloud

---

## 🧠 Experiência Cognitiva

O J-Oráculo foi projetado como uma **entidade digital**, não apenas uma interface de perguntas e respostas.

A interação segue um fluxo experiencial:

```
Usuário consulta
 → Oráculo interpreta
 → Presença cognitiva reage
 → Resposta manifesta-se
```

Elementos introduzidos:

- Presença visual do Oráculo
- Estados cognitivos de interpretação
- Manifestação progressiva da resposta
- Interface contemplativa orientada à percepção

---

## 🏗 Arquitetura Geral

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

Arquitetura **provider-agnostic**, onde a identidade da IA é independente do modelo utilizado.

### Componentes Cognitivos

- **Persona** → identidade filosófica do Oráculo
- **AI Services** → comunicação com provedores
- **Formatter** → normalização textual das respostas
- **Fallback** → resiliência entre providers

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

- Configuração de clientes de IA
- Validação de requisições HTTP
- Comunicação com provedores LLM
- Controle de identidade cognitiva
- Tratamento global de erros

---

## 🤖 Integração com Inteligência Artificial

Provedores suportados:

- **Google Gemini** (`gemini-2.0-flash`)
- **OpenAI GPT** (`gpt-4o-mini`)

Características aplicadas:

- Prompt Engineering centralizado
- Controle de tamanho de resposta
- Redução de consumo de tokens
- Independência de provider
- Consistência comportamental

---

## 🎨 Frontend

Tecnologias utilizadas:

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Feature-Based Architecture

Funcionalidades:

- Consulta textual
- Reconhecimento de voz (Web Speech API)
- Histórico em memória
- Estados cognitivos visuais
- Resposta emergente animada
- Comunicação assíncrona com backend

---

## 🧱 Infraestrutura

- Deploy Frontend: **Vercel**
- Deploy Backend: **Render**
- Endpoint `/health` para monitoramento
- CI/CD automático via GitHub
- Ambiente distribuído em cloud

---

## 🧩 Princípios Arquiteturais Aplicados

- Separation of Concerns
- Clean Architecture
- Provider-Agnostic AI Integration
- Prompt Engineering Centralizado
- Resiliência via Fallback
- Continuous Deployment

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
