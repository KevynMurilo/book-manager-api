# Livraria API

Esta API foi desenvolvida para gerenciar uma livraria virtual, permitindo a criação, listagem, remoção e obtenção de detalhes de livros.

## Funcionalidades

- Criar um novo livro com título, número de páginas e sinopse.
- Listar todos os livros disponíveis.
- Obter o PDF de um livro.
- Obter a imagem de capa de um livro.
- Remover um livro.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- Multer (para upload de imagens e PDFs)
- Mongoose (para modelagem de dados MongoDB)

## Configuração

1. Clone o repositório para o seu ambiente local.
2. Instale as dependências usando o comando:

npm install

## Certifique-se de ter um servidor MongoDB em execução. Crie um arquivo .env na raiz do projeto e adicione a URI do seu banco de dados:

MONGODB_URI=sua_uri_aqui

Inicie o servidor usando:
npm start

## Rotas
POST /livraria
Cria um novo livro. Requer um formulário com os seguintes campos:

title: Título do livro.
pages: Número de páginas.
synopsis: Sinopse do livro.
image: Imagem de capa do livro (envio de arquivo).
pdf: Arquivo PDF do livro (envio de arquivo).
GET /livraria
Obtém todos os livros disponíveis.

GET /livraria/:id/pdf
Obtém o PDF de um livro específico.

GET /livraria/:id/image
Obtém a imagem de capa de um livro específico.

DELETE /livraria/:id
Remove um livro específico.

Exemplo de Uso
import axios from "axios";

## // Exemplo de requisição para criar um novo livro
axios.post("http://localhost:5000/livraria", {
  title: "Novo Livro",
  pages: 300,
  synopsis: "Uma breve sinopse aqui.",
  // Adicione os arquivos de imagem e PDF como FormData
})
  .then(response => {
    console.log("Livro criado com sucesso!", response.data);
  })
  .catch(error => {
    console.error("Erro ao criar livro:", error);
  });
