const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const PictureController = require("../controllers/livrariaController");

// Rota para criar um novo Livraria item
router.post("/", upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]), PictureController.create);

// Rota para obter todas as imagens
router.get("/", PictureController.findAll);

// Rota para obter o PDF de um Livraria item
router.get("/:id/pdf", PictureController.getPDF);

// Adicione a rota para obter a imagem
router.get("/:id/image", PictureController.getImage);

// Rota para remover um Livraria item
router.delete("/:id", PictureController.remove);

module.exports = router;
