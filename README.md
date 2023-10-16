# Descrição do Projeto

Este projeto consiste em uma aplicação para realizar upload, armazenamento e gerenciamento de imagens. Ele utiliza Node.js e MongoDB para lidar com o armazenamento de dados e Express.js para a criação de rotas e manipulação de requisições.

## Estrutura do Projeto

A estrutura do projeto é dividida em diferentes partes, cada uma responsável por uma funcionalidade específica:

- **controllers/pictureController.js**: Controlador para lidar com operações relacionadas a imagens, incluindo criação, remoção e busca.

- **models/Picture.js**: Modelo que representa e interage com as imagens no banco de dados MongoDB.

- **config/multer.js**: Configuração do middleware Multer para facilitar o upload de arquivos.

- **routes/picture.js**: Definição das rotas relacionadas às operações de imagens, utilizando o controlador e o middleware Multer.

- **db.js**: Configuração para conectar o aplicativo ao banco de dados MongoDB.

- **app.js**: Arquivo principal que configura o servidor Express, carrega as variáveis de ambiente e define as rotas.

## Requisitos

Antes de iniciar o projeto, certifique-se de ter as seguintes dependências instaladas:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Configuração

1. Clone o repositório para o seu ambiente local.
git clone <https://github.com/KevynMurilo/ApiPicture.git>


2. Instale as dependências do projeto.
npm install


3. Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias (consulte o arquivo .env.example para referência).


4. Inicie o servidor.
node app.js


O servidor será iniciado e estará acessível em http://localhost:4000.

## Uso

- Para criar uma nova imagem, envie uma requisição POST para http://localhost:4000/pictures com o arquivo no corpo da requisição.

- Para obter todas as imagens, envie uma requisição GET para http://localhost:4000/pictures.

- Para remover uma imagem, envie uma requisição DELETE para http://localhost:4000/pictures/:id, substituindo :id pelo ID da imagem a ser removida.


