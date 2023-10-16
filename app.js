const express = require("express");
const cors = require("cors"); 

const app = express();

require("dotenv").config();
require("./db");

const port = process.env.PORT || 5000;

const livrariaRouter = require("./routes/livraria");

app.use(cors()); 
app.use("/livraria", livrariaRouter);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
