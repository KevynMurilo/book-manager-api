import express from "express";
import livroRouter from "./livro.route.js";
import autorRouter from "./autor.route.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Servidor funcionando"));

    app.use(express.json(), livroRouter, autorRouter);
};

export default routes;