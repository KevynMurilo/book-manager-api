import express from "express";
import AutorController from "../controllers/autor.controller.js";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router.get("/autores", AutorController.listarAutor, paginar);
router.get("/autores/:id", AutorController.listarAutorPorId);
router.post("/autores", AutorController.cadastrarAutor);
router.put("/autores/:id", AutorController.atualizarAutor);
router.delete("/autores/:id", AutorController.deletarAutor);

export default router;