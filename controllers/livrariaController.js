const fs = require("fs");
const Picture = require("../models/Livraria");

exports.create = async (req, res) => {
  try {
    const { title, pages, synopsis } = req.body;

    const imageFile = req.files['image'][0];
    const pdfFile = req.files['pdf'][0];

    const picture = new Picture({
      title,
      pages,
      synopsis,
      imageSrc: imageFile.path,
      pdfSrc: pdfFile.path,
    });

    await picture.save();
    res.json(picture);
  } catch (err) {
    res.status(500).json({ message: "Erro ao salvar a imagem e o PDF." });
  }
};

exports.remove = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);
    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }
    fs.unlinkSync(picture.imageSrc);
    fs.unlinkSync(picture.pdfSrc);
    await picture.remove();
    res.json({ message: "Imagem e PDF removidos com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao remover a imagem e o PDF" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const pictures = await Picture.find();
    res.json(pictures);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar as imagens." });
  }
};

exports.getPDF = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);
    if (!picture) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }

    // Configurar cabeçalhos para indicar que é um PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename=${picture.title}.pdf`);

    // Enviar o PDF como resposta
    fs.createReadStream(picture.pdfSrc).pipe(res);
  } catch (err) {
    res.status(500).json({ message: "Erro ao obter o PDF" });
  }
};

exports.getImage = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);
    if (!picture) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }

    // Enviar a imagem como resposta
    fs.createReadStream(picture.imageSrc).pipe(res);
  } catch (err) {
    res.status(500).json({ message: "Erro ao obter a imagem" });
  }
};
