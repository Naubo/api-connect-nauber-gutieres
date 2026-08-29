const express = require("express");

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Importa as rotas de usuários
const userRoutes = require("./src/routes/userRoutes");

// Utiliza as rotas
app.use(userRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});