const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set('strictQuery', false); 

main().catch((err) => console.log(err));

async function main(){
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Conectado ao MongoDB com sucesso!");
}

module.exports = main;
