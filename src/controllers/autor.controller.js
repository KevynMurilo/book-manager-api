import NaoEncontrado from "../erros/erro404.js";
import { autor } from "../models/index.js";

class AutorController{

    static async listarAutor(req, res, next){
        try {
            const autores = autor.find({});
            req.resultado = autores;
            next();
            
        } catch (error) {
            next(error);
        }
    };

    static async listarAutorPorId(req, res, next){
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);

            if(autorEncontrado !== null){
                res.status(200).json(autorEncontrado);
            }else{
                next(new NaoEncontrado("Id do autor não localizado"));
            }
            
        } catch (error) {
            next(error);
        }
    };

    static async cadastrarAutor(req, res, next){
        try {
            const autorCriado = await autor.create(req.body)
            res.status(200).json({autorCriado});
        } catch (error) {
            next(error);
        }
    };

    static async atualizarAutor(req, res, next){
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado com sucesso!" });
        } catch (error) {
            next(error);
        }
    };

    static async deletarAutor(req, res, next){
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "Autor deletado com sucesso!" });
        } catch (error) {
            next(error)
        }
    }

};

export default AutorController;