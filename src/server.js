const express = require('express');
const nunjucks = require('nunjucks');

const server = express()

// Configurar pasta publica
server.use(express.static('public'))

//Utilizando o template Engine nunjucks
nunjucks.configure("src/views", {
   express: server,
   noCache: true
})



// Configurar caminhos da minha aplicação
// Página inicial
// req => requisição
// res => resposta
server.get('/', (req, res) => {
   return res.render("index.html", { title: 'Um titulo' })
})

server.get('/create-point', (req, res) => {
   return res.render('create-point.html')
})

server.get('/search-results', (req, res) => {
   return res.render('search-results.html')
})

// Ligar o servidor
server.listen(3000)