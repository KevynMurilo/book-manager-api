const fs = require("fs");
const Book = require("../models/Livraria");

exports.create = async (req, res) => {
  try {
    const { title, pages, synopsis } = req.body;

    const imageFile = req.files['image'][0];
    const pdfFile = req.files['pdf'][0];

    const book = new Book({
      title,
      pages,
      synopsis,
      imageSrc: imageFile.path,
      pdfSrc: pdfFile.path,
    });

    await book.save();
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: "Erro ao salvar a imagem e o PDF." });
  }
};

exports.update = async (req, res) => {
  try {
    const { title, pages, synopsis } = req.body;

    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }

    book.title = title;
    book.pages = pages;
    book.synopsis = synopsis;

    if (req.files['image']) {
      const imageFile = req.files['image'][0];
      fs.unlinkSync(book.imageSrc);
      book.imageSrc = imageFile.path;
    }

    if (req.files['pdf']) {
      const pdfFile = req.files['pdf'][0];
      fs.unlinkSync(book.pdfSrc);
      book.pdfSrc = pdfFile.path;
    }

    await book.save();

    res.json(book);
  } catch (err) {
    res.status(500).json({ message: "Erro ao atualizar a imagem e o PDF." });
  }
};

exports.remove = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }
    fs.unlinkSync(book.imageSrc);
    fs.unlinkSync(book.pdfSrc);
    await book.remove();
    res.json({ message: "Livro e PDF removidos com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao remover o livro e o PDF" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar os livros." });
  }
};

exports.getPDF = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename=${book.title}.pdf`);

    fs.createReadStream(book.pdfSrc).pipe(res);
  } catch (err) {
    res.status(500).json({ message: "Erro ao obter o PDF" });
  }
};

exports.getImage = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }

    fs.createReadStream(book.imageSrc).pipe(res);
  } catch (err) {
    res.status(500).json({ message: "Erro ao obter a imagem" });
  }
};
