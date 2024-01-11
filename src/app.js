import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const conexao = await dbConnect();

conexao.once("error", (error) => {
    console.log("Erro ao conectar com o banco de dados", error);
});

conexao.on("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso!");
});

const app = express();
routes(app);

app.use(manipulador404);
app.use(manipuladorDeErros);

export default app;