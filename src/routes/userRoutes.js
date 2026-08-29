const express = require("express");
const router = express.Router();

const { usuarios } = require("../data/users");

// GET /usuarios - Lista todos os usuários
router.get("/usuarios", (req, res) => {
    res.status(200).json(usuarios);
});

// POST /usuarios - Cadastra um novo usuário
router.post("/usuarios", (req, res) => {
const { nome, email } = req.body;

// Validação dos campos obrigatórios
if (!nome || !email) {
    return res.status(400).json({
        error: "Os campos nome e email são obrigatórios."
    });
}

// Criação do novo usuário
const novoUsuario = {
    id: usuarios.length + 1,
    nome: nome,
    email: email
};

usuarios.push(novoUsuario);

// Resposta padronizada de sucesso
res.status(201).json({
    data: novoUsuario
});

});

// GET /usuarios/:id - Busca um usuário específico
router.get("/usuarios/:id", (req, res) => {
    const id = Number(req.params.id);

    const usuario = usuarios.find(user => user.id === id);

    if (!usuario) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        });
    }

    res.status(200).json(usuario);
});

// PUT /usuarios/:id - Atualiza um usuário
router.put("/usuarios/:id", (req, res) => {
    const id = Number(req.params.id);

    const indice = usuarios.findIndex(user => user.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        });
    }

    const { nome, email } = req.body;

    usuarios[indice].nome = nome;
    usuarios[indice].email = email;

    res.status(200).json(usuarios[indice]);
});

// DELETE /usuarios/:id - Remove um usuário
router.delete("/usuarios/:id", (req, res) => {
    const id = Number(req.params.id);

    const indice = usuarios.findIndex(user => user.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        });
    }

    usuarios.splice(indice, 1);

    res.status(204).send();
});

module.exports = router;