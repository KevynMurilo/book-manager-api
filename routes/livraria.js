const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const BookController = require("../controllers/livrariaController");

// Rota para criar um novo livro
router.post("/", upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]), BookController.create);

// Rota para obter todos os livros
router.get("/", BookController.findAll);

// Rota para obter o PDF de um livro
router.get("/:id/pdf", BookController.getPDF);

// Adicione a rota para obter a imagem de um livro
router.get("/:id/image", BookController.getImage);

// Rota para remover um livro
router.delete("/:id", BookController.remove);

module.exports = router;
