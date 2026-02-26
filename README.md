# 🔮 J_Oraculo

O **J_Oraculo** é uma aplicação fullstack baseada em Inteligência Artificial capaz de gerar respostas filosóficas reflexivas utilizando o **Google Gemini**.

O projeto evoluiu de uma aplicação em JavaScript puro para uma arquitetura moderna distribuída, seguindo boas práticas de engenharia de software, separação de responsabilidades e deploy em cloud.

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

- Gerar respostas filosóficas densas e provocativas
- Controlar parâmetros de geração da IA
- Reduzir consumo de tokens
- Manter previsibilidade das respostas
- Aplicar arquitetura escalável fullstack

O projeto também serve como estudo prático de:

- Integração com LLM
- Engenharia de Prompt
- Arquitetura Backend
- Frontend moderno com Next.js
- Deploy distribuído em cloud

---

## 🏗 Arquitetura Atual

```
Frontend (Next.js - Vercel)
        ↓
Backend (Node.js + Express - Render)
        ↓
Google Gemini API
```

---

## 🧩 Estrutura do Projeto

```
J-ORACULO/
│
├── backend/     → API Node.js + Express
├── frontend/    → Next.js (App Router)
├── legacy/      → versão inicial arquivada
└── README.md
```

---

## ⚙️ Backend

O backend segue arquitetura em camadas:

```
Request
 → Route
 → Controller
 → Service
 → Gemini API
 → Response
```

### Responsabilidades

- **Config** → instancia cliente Gemini  
- **Controller** → valida requisição HTTP  
- **Service** → constrói prompt e chama IA  
- **Middleware** → tratamento global de erros  
- **Server** → inicialização da aplicação  

---

## 🤖 Integração com IA

Modelo utilizado:

```
gemini-2.0-flash
```

Configuração principal:

- `temperature`: 0.85
- `maxOutputTokens`: 200

Estratégias aplicadas:

- Controle explícito de tamanho da resposta
- Redução de truncamento
- Otimização de consumo de tokens
- Prompt estruturado filosófico

---

## 🎨 Frontend

Tecnologias utilizadas:

- Next.js 16 (App Router)
- TypeScript
- TailwindCSS
- Feature-based architecture

Funcionalidades:

- Envio manual de perguntas
- Reconhecimento de voz (Web Speech API)
- Histórico em memória
- Controle de loading
- Tratamento de erros
- Comunicação assíncrona com backend

---

## 🧱 Infraestrutura

- Deploy Frontend: **Vercel**
- Deploy Backend: **Render**
- Endpoint `/health` para monitoramento
- Keep-alive configurado para evitar cold start
- Integração contínua via GitHub

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

Mantida apenas para fins históricos e estudo da evolução arquitetural do projeto.

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
- Autenticação de usuários
- Memória conversacional IA
- Streaming de respostas em tempo real
- Rate limiting
- Logs estruturados
- Observabilidade
- Transformação em Micro SaaS

---

## 👨‍💻 Autor

**Jair Sousa**  
Formado em Análise e Desenvolvimento de Sistemas  

Foco em:
- Backend Development
- Node.js
- Arquitetura de Software
- Integração com Inteligência Artificial
