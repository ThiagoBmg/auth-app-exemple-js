const express = require('express'); 
const app = express(); // iniciando express para manipular as funções disponiveis

app.use(express.json());    // trabalhando com json nas requisições 
app.use(express.static('./src/views')); // definindo o caminho src/views para servir arquivos estaticos
app.set('view engine','ejs'); 

app.use(require('./src/routes/views'));
app.use(require('./src/routes/users'));

app.listen(3000, ()=>{ // iniciando servidor 
    console.log('Servidor rodando na porta 3000')
});