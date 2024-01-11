import ErroBase from "./ErroBase.js";

class ReqInvalido extends ErroBase{
    constructor(mensagem = "Um ou mais caracteres invalidos"){
        super(mensagem, 400);
    };
};

export default ReqInvalido;