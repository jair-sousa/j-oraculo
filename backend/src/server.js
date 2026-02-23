require("dotenv").config();

const express = require("express");
const cors = require("cors");
const oraculoRoutes = require("./routes/oraculo.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", oraculoRoutes);

// Middleware global de erro
app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
