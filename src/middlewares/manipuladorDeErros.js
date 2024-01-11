import mongoose from "mongoose";
import ReqInvalido from "../erros/ReqInvalido.js";
import ErroBase from "../erros/ErroBase.js";
import ValidationError from "../erros/ValidationError.js";

function manipuladorDeErros(error, req, res, next){
    console.log(error);
    if(error instanceof mongoose.Error.CastError){
        new ReqInvalido().enviarResposta(res);
    }else if(error instanceof mongoose.Error.ValidationError){
        new ValidationError(error).enviarResposta(res);
    }else if(error instanceof ErroBase){
        error.enviarResposta(res);
    }
    else{
        new ErroBase().enviarResposta(res);
    }
};

export default manipuladorDeErros;