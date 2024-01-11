import mongoose from "mongoose";
import { autorSchema } from "./autor.model.js";

const livroSchema = new mongoose.Schema({
    id: { 
        type: mongoose.Schema.Types.ObjectId },
    titulo: { 
        type: String, 
        required: [true, "Titulo do livro é obrigatório"],
    editora: { 
        type: String, 
        required: [true, "Editora do livro é obrigatório"],
        //enum é para colocar valores permitidos no req dentro do array
        enum: { //quando for passar outra propriedade tem que colocar entre {}
            values: ["Casa do código", "Novatec"], //values é para os valores permitidos
            message: "A editora {VALUE} não é um valor permitido" //para personalizar a mensagem de erro
        }
    }, //é para colocar só os valores que podem ser permitidos para esse campo
    },
    autor: autorSchema,
    paginas: {
        type: Number,
        required: [true, "Páginas do livro é obrigatório"],
        validate: {
            validator: (valor) => {
                return valor >= 10 && valor <= 5000;
            },
            message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
        }
    },
        // min: [10, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"],
        // max: [5000, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"],
    preco: { 
        type: Number, 
        required: [true, "Preço do livro é obrigatório"] }
});

const livro = mongoose.model("livros", livroSchema);

export default livro;