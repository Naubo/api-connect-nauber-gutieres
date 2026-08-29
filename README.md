# API Connect

## Objetivo

A API Connect é uma API REST desenvolvida como um MVP para gerenciamento de usuários. A aplicação permite realizar operações de cadastro, consulta, atualização e remoção de usuários utilizando requisições HTTP e respostas no formato JSON.

## Tecnologias utilizadas

* Node.js
* Express
* JavaScript
* HTTP
* JSON
* Postman para testes

## Pré-requisitos

Para executar o projeto localmente, é necessário ter o Node.js instalado no computador.

## Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/Naubo/api-connect-nauber-gutieres.git
cd api-connect
```

Instale as dependências do projeto:

```bash
npm install
```

## Execução

Para iniciar o servidor, execute:

```bash
node server.js
```

O servidor será iniciado em:

```text
http://localhost:3000
```

## Endpoints

| Método | Endpoint        | Descrição                | Status                         |
| ------ | --------------- | ------------------------ | ------------------------------ |
| GET    | `/usuarios`     | Lista todos os usuários  | 200 OK                         |
| GET    | `/usuarios/:id` | Busca um usuário pelo ID | 200 OK / 404 Not Found         |
| POST   | `/usuarios`     | Cadastra um novo usuário | 201 Created / 400 Bad Request  |
| PUT    | `/usuarios/:id` | Atualiza um usuário      | 200 OK / 404 Not Found         |
| DELETE | `/usuarios/:id` | Remove um usuário        | 204 No Content / 404 Not Found |

## Exemplos de requisições

### Listar usuários

```http
GET http://localhost:3000/usuarios
```

### Buscar usuário por ID

```http
GET http://localhost:3000/usuarios/1
```

### Cadastrar usuário

```http
POST http://localhost:3000/usuarios
Content-Type: application/json
```

```json
{
    "nome": "Carlos Oliveira",
    "email": "carlos@email.com"
}
```

### Atualizar usuário

```http
PUT http://localhost:3000/usuarios/1
Content-Type: application/json
```

```json
{
    "nome": "Carlos Oliveira Atualizado",
    "email": "carlos.novo@email.com"
}
```

### Remover usuário

```http
DELETE http://localhost:3000/usuarios/1
```

## Validações

A API realiza validação dos campos obrigatórios no cadastro e na atualização dos usuários. Os campos `nome` e `email` devem ser informados para que a operação seja concluída.

Quando os dados obrigatórios não são enviados, a API retorna o status `400 Bad Request` com uma mensagem de erro em formato JSON.

## Persistência

Para este MVP, os dados dos usuários são armazenados em um array em memória. Dessa forma, os dados permanecem disponíveis enquanto o servidor estiver em execução.

## Testes

Os endpoints foram testados utilizando o Postman, contemplando operações de sucesso e cenários de erro, incluindo:

* Cadastro de usuário;
* Validação de dados obrigatórios;
* Listagem de usuários;
* Busca de usuário por ID;
* Atualização de usuário;
* Remoção de usuário;
* Tratamento de registros inexistentes.
