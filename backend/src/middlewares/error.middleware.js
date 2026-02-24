/**
 * error.middleware.js
 *
 * Middleware global de tratamento de erros.
 * Deve ser registrado após todas as rotas.
 *
 * Responsável por:
 * - Capturar erros propagados via next(err)
 * - Logar o erro no servidor
 * - Retornar resposta padronizada ao cliente
 */

function errorMiddleware(err, req, res, next) {
  console.error("Erro capturado:", err);

  res.status(500).json({
    erro: "Erro interno do servidor."
  });
}

module.exports = errorMiddleware;
