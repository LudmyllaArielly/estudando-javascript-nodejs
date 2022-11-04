## Estudando nodeJS

## Tecnologias usadas

- Javascript
  - MongoDB
  - Mongoose

## Passos para configuração

**1. Clone a aplicação**

```bash
git clone https://github.com/LudmyllaArielly/estudando-nodejs.git
```
**2. Execute a aplicação**

```bash
npm run start:dev
```
**3. Pré-requisitos**
```bash
nodeJS
```
Exemplo de endereço: http://localhost:8080/users

## Explorar Rest APIs

### Usuário

| Method | Url                            | Description                              |
| ------ | ------------------------------ | ---------------------------------------- |
| GET    | /users                         | Lista todos usuários                     |
| GET    | /users/id                      | Busca usuário por id                     |
| POST   | /users                         | Cria usuário                             |
| PATCH  | /users/id                      | Atualiza usuário                         |
| DELETE | /users/id                      | Deleta usuário                           |

## Exemplo de corpo de solicitações JSON válidos

##### Cria usuário
```json
  {
    "firstName": "Anna",
    "lastName": "Silva",
    "email": "anna@xyz.com",
    "password": "1234567"
  }
```

##### Atualiza usuário
```json
  {
    "email": "anna@xyz.com",
  }
```


