/**
 * server.js
 *
 * Arquivo principal da aplicação.
 *
 * Responsável por:
 * - Carregar variáveis de ambiente
 * - Inicializar o servidor Express
 * - Configurar middlewares globais
 * - Configurar CORS explicitamente
 * - Registrar rotas
 * - Registrar middleware global de erro
 * - Inicializar o servidor HTTP
 */

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const oraculoRoutes = require("./routes/oraculo.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

/**
 * Configuração explícita de CORS
 *
 * Define origens permitidas para evitar bloqueios
 * em ambientes de produção (Vercel) e desenvolvimento local.
 */
const allowedOrigins = [
  "https://j-oraculo.vercel.app",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Origem não permitida por CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: false,
  })
);

/**
 * Suporte explícito para preflight (OPTIONS)
 * Evita falhas intermitentes após cold start.
 */
app.options("*", cors());

/**
 * Middleware para parsing de JSON
 */
app.use(express.json());

/**
 * Health Check
 *
 * Endpoint leve para monitoramento e keep-alive.
 * Não realiza chamadas externas.
 */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "j-oraculo-backend",
    timestamp: new Date().toISOString(),
  });
});

/**
 * Registro de rotas da aplicação
 */
app.use("/", oraculoRoutes);

/**
 * Middleware global de erro
 * Deve ser o último middleware registrado.
 */
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

/**
 * Inicialização do servidor
 */
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
