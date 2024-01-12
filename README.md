# API LIVRARIA ATUALIZADA

Um projeto incrível que envolve [descrição curta do seu projeto].

## Instalação

1. Clone o repositório: `git clone https://github.com/seuusuario/seuprojeto.git`
2. Instale as dependências: `npm install`

## Configuração

1. Crie um arquivo `.env` na raiz do seu projeto e adicione as seguintes configurações:
- `DB_CONNECT_STRING`: String de conexão com o banco de dados MongoDB.
- `PORT`: Porta na qual o servidor será executado.

## Executando o Projeto

1. Execute o comando: `npm start`

## Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

## [config](./config)

- **dbConnect.js**: Configuração de conexão com o banco de dados MongoDB.

## [controllers](./controllers)

- **autor.controller.js**: Controlador para operações relacionadas a autores.
- **livro.controller.js**: Controlador para operações relacionadas a livros.

## [erros](./erros)

- **erroBase.js**: Classe base para manipulação de erros.
- **ReqInvalido.js**: Classe para representar erros de requisição inválida.
- **ValidationError.js**: Classe para representar erros de validação.
- **erro404.js**: Classe para representar erros de página não encontrada.

## [middlewares](./middlewares)

- **manipulador404.js**: Middleware para manipular erros 404.
- **manipuladorDeErros.js**: Middleware para manipular diferentes tipos de erros.
- **paginas.js**: Middleware para paginar resultados.
- **validadorGlobal.js**: Validador global para campos de string.

## [models](./models)

- **autor.model.js**: Modelo de dados para autores.
- **livro.model.js**: Modelo de dados para livros.
- **validadorGlobal.js**: Validador global para campos de string.
- **index.js**: Arquivo de índice para modelos de dados.

## [routes](./routes)

- **autor.route.js**: Rotas relacionadas a autores.
- **livro.route.js**: Rotas relacionadas a livros.
- **index.js**: Arquivo de índice para rotas.

## [app.js](./app.js)

Configuração principal do aplicativo Express.

## [.env](./.env)

Arquivo de configuração para variáveis de ambiente.

## [server.js](./server.js)

Arquivo para inicialização do servidor.


## Rotas

### Autor

#### `GET /autores`

Recupera uma lista de autores.

#### `GET /autores/:id`

Recupera um autor específico com base no ID.

#### `POST /autores`

Cadastra um novo autor.

#### `PUT /autores/:id`

Atualiza informações de um autor existente.

#### `DELETE /autores/:id`

Exclui um autor com base no ID.

### Livro

#### `GET /livros`

Recupera uma lista de livros.

#### `GET /livros/filtrar`

Recupera uma lista de livros filtrados por diferentes critérios.

#### `GET /livros/:id`

Recupera informações detalhadas de um livro com base no ID.

#### `POST /livros`

Cadastra um novo livro.

#### `PUT /livros/:id`

Atualiza informações de um livro existente.

#### `DELETE /livros/:id`

Exclui um livro com base no ID.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request.


