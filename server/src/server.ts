import express from 'express';
import routes from './routes'

const app = express();

app.use(express.json());
app.use(routes);


app.listen(3333);

// MÉTODOS HTTP
//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação no Back-end
//PUT: Atualizar uma informação já existente
//DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
//      app.get('/users', (request, response) => {
//      console.log(request.body);
// insomnia: http://localhost:3333/users

// Route Params: Identificar qual recurso eu quero atualizar ou deletar
//      app.delete('/users:id', (request, response) => {
//      console.log(request.params);
// insomnia: http://localhost:3333/users/1

// Query Params: Paginação, filtros, ordenação
//      app.get('/users', (request, response) => {
//      console.log(request.query);
// insomnia: http://localhost:3333/users?page=2&sort=name&



