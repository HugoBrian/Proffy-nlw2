import express from 'express';

const app = express();

//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação no Back-end
//PUT: Atualizar uma informação já existente
//DELETE: Deletar uma informação existente

app.post('/users', (request, response) => {
    const users = [
        { name: 'Diego', age: 25},
        { name: 'Vini', age: 21},
    ]
    return response.json(users);
});

app.listen(3333);