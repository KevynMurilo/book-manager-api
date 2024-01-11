//o import do validadorGlobal tem sempre que ser o primeiro por que o js lê linha por linha
import "./validadorGlobal.js";
import livro from "./livro.model.js";
import { autor } from "./autor.model.js";

export {livro, autor};