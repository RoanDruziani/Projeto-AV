// @ts-nocheck
/**
 * Arquivo: routes/funcionarioRoute.js
 * Descrição: arquivo responsável pelas rotas da api relacionado ao Funcionário.

 */

// ==> Aqui que vai conter as rotas do HTTP da api - funcionário

const router = require('express-promise-router')();
const clienteController = require('../controllers/cliente.controller');

// ==> Definindo as rotas do CRUD - Funcionario:

// ==> Rota responsável por criar um novo Funcionário: (POST): localhost:8000/api/funcionarios
router.post('/clientes', clienteController.create);

// ==> Rota responsável por selecionar todos os Funcionarios: (GET): localhost:8000/api/funcionarios/
router.get('/clientes', clienteController.findAll);

// ==> Rota responsável por selecionar 'Funcionario' pelo 'Id': (GET): localhost:8000/api/funcionarios/:id
router.get('/clientes/:id', clienteController.findById);

// ==> Rota responsável por atualizar 'cliente' pelo 'Id': (PUT): localhost: 8000/api/clientes/:id
router.put('/clientes/:id', clienteController.update);

// ==> Rota responsável por excluir 'Funcionário' pelo 'Id': (DELETE): localhost:8000/api/clientes/:id
router.delete('/clientes/:id', clienteController.delete);

module.exports = router;
