/**
 * server.js
 *
 * Arquivo principal da aplicação.
 * Responsável por:
 * - Carregar variáveis de ambiente
 * - Inicializar o servidor Express
 * - Configurar middlewares globais
 * - Registrar rotas
 * - Inicializar o servidor HTTP
 */

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const oraculoRoutes = require("./routes/oraculo.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

/**
 * Middlewares globais
 */
app.use(cors());
app.use(express.json());

/**
 * Registro de rotas
 */
app.use("/", oraculoRoutes);

/**
 * Middleware global de erro
 * Deve ser o último middleware registrado.
 */
app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
