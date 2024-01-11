import NaoEncontrado from "../erros/erro404.js";
import { autor, livro } from "../models/index.js";

class livroController{

    static async listarLivros(req, res, next){
        try {
            const buscaLivros = livro.find();

            req.resultado = buscaLivros;

            next();
        } catch (error) {
            next(error);
        }
    };

    static async listarLivroPorId(req, res, next){
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);

            if(livroEncontrado !== null){
                res.status(200).json(livroEncontrado);
            }else{
                next(new NaoEncontrado("Id do livro não licalizado"));
            }
            
        } catch (error) {
            next(error);
        }
    };

    static listarLivroPorFiltro = async (req, res, next) => {
        try {
          const busca = await processaBusca(req.query);
    
          if (busca !== null) {
            const livrosResultado =  livro
              .find(busca)
              .populate("autores");
    
              req.resultado = livrosResultado;

            next();
          } else {
            res.status(200).json([]);
          }
        } catch (erro) {
          next(erro);
        }
    };

    static async cadastrarLivro(req, res, next){
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}}
            const livroCriado = await livro.create(livroCompleto);
            res.status(200).json(livroCriado);
        } catch (error) {
            next(error);
        }
    };

    static async atualizarLivro(req, res, next){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado com sucesso!" });
        } catch (error) {
            next(error);
        }
    };

    static async deletarLivro(req, res, next){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro deletado com sucesso!" });
        } catch (error) {
            next(error)
        }
    }

};

async function processaBusca(parametros){
    const {editora, titulo, minPaginas, maxPaginas, nomeAutor} = parametros;

    const busca = {};
    
    if(editora) busca.editora = { $regex: editora, $options: "i" };
    if(titulo) busca.titulo = { $regex: titulo, $options: "i" };

    if(minPaginas || maxPaginas) busca.paginas = {};

    // gte = Greater Than or Equal = Maior ou igual que
    if(minPaginas) busca.paginas.$gte = minPaginas;
    // lte = Less Than or Equal = menor ou igual que
    if(maxPaginas) busca.paginas.$lte = maxPaginas;

    if(nomeAutor){
        const autorEncontrado = await autor.findOne({ nome: nomeAutor });

        if (autorEncontrado) {
            const autorId = autorEncontrado._id;
            busca.autor = autorId;
        }
    }

    return busca;
};


export default livroController;