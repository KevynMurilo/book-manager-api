const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const BookController = require("../controllers/livrariaController");

router.post("/", upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]), BookController.create);

router.put("/:id", upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]), BookController.update);

router.get("/", BookController.findAll);

router.get("/:id/pdf", BookController.getPDF);

router.get("/:id/image", BookController.getImage);

router.delete("/:id", BookController.remove);

module.exports = router;
