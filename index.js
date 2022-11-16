// Importar express
const express = require("express");

// Criar o servidor
const servidor = express();

// Definir a public como pasta de arquivos estáticos
servidor.use(express.static(__dirname + '/public'));

// Definir as rotas
servidor.get('/produtos', (req, res)=>{
    return res.sendFile(__dirname + '/views/produtos.html');
})

// Fazer meu servidor rodar
servidor.listen(3000);


