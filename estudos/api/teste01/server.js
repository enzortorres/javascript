import express from 'express'

const app = express() // Atribuir a variável "app" todas propriedades da biblioteca "express"
app.use(express.json())

// app.get('/users') // Mostra todos usuários
// app.post('/users') // Cria um novo usuário
// app.put('/users') // Edita vários usuários
// app.patch('/users) // Edita um usuário
// app.delete('/users') // Deleta um usuário

const users = []

app.post('/users', (req, res) => { // req == require, res == response
    
    users.push(req.body)

    res.status(201).json(req.body)
})

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)

/*
    Criar nossaAPI de Usuários

    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário
*/


/* 
    1) Tipo de Rota / Método HTTP
    2) Endereço
*/