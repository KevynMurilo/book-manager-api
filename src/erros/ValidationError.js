import ReqInvalido from "./ReqInvalido.js";

class ValidationError extends ReqInvalido{
    constructor(error){
        const mensagensErrors = Object.values(error.errors)
            .map(error => error.message)
            .join("; ");
        super(`Os seguintes erros foram achados: ${mensagensErrors}`);
    }
};

export default ValidationError;