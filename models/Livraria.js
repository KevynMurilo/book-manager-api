const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true },
  pages: { type: Number, required: true },
  synopsis: { type: String, required: true },
  imageSrc: { type: String, required: true },
  pdfSrc: { type: String, required: true },
});

module.exports = mongoose.model("Book", BookSchema);
