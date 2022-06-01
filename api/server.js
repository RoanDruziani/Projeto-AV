/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração da aplicação (Back-End)

 */

// ==> Exemplo usando o SOLID

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port);
console.log('Aplicação executando na porta', port);
