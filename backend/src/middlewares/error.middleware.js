function errorMiddleware(err, req, res, next) {
  console.error("Erro capturado:", err);

  res.status(500).json({
    erro: "Erro interno do servidor."
  });
}

module.exports = errorMiddleware;
