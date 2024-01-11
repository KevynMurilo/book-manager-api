import ReqInvalido from "../erros/ReqInvalido.js";

async function paginar(req, res, nex){
    try {
        let { limite = 5, pagina = 1, ordenacao ="_id:-1" } = req.query;
    
        let [caompoOrdenacao, ordem] = ordenacao.split(":");

        limite = parseInt(limite);
        pagina = parseInt(pagina);
        ordem = parseInt(ordem);

        const resultado = req.resultado;

        if(limite > 0 && pagina > 0){
            const resultadoPaginado = await resultado.find({})
                .sort({ [caompoOrdenacao]: ordem }) // para ordenar a busca
                .skip((pagina - 1) * limite)
                .limit(limite);
                
            res.status(200).json(resultadoPaginado);
        }else{
            next(new ReqInvalido())
        }
    } catch (error) {
        next(error);
    }
};

export default paginar;