/**
 * Arquivo: src/controllers/funcionario.controller.js
 * Descrição: arquivo responsável pelo CRUD da classe 'Funcionário'

 */

const Cliente = require('../models/cliente.model');

// ==> Método responsável por criar um novo(a) 'Funcionário(a)':

// Async & Await:
exports.create = async (req, res) => {
  const novoCliente = new Cliente(req.body);
  const cliente = await novoCliente.save();
  res.status(201).send({ message: 'Cliente(a) criado(a) com sucesso!', cliente });
};

// ==> Método responsável por selecionar todos os Funcionários:
exports.findAll = async (req, res) => {
  const clientes = await Cliente.find({});
  res.status(200).send(clientes);
};

// ==> Método responsável por selecionar 'Funcionario' pelo 'Id':
exports.findById = async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  res.status(200).send(cliente);
};

// ==> Método responsável por atualizar 'Funcionário' pelo 'Id':
exports.update = async (req, res) => {
  // => Validação de campos vazios:
  if (!req.body.nomeCliente || !req.body.cargo || !req.body.numeroIdentificador) {
    return res.status(400).send({ message: 'Os campos não podem ser vazios.' });
  }

  const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body);
  return res.status(200).send({ message: 'Cliente atualizado(a) com sucesso', cliente });
};

// ==> Método responsável por excluir 'Funcionário' pelo 'Id':
exports.delete = async (req, res) => {
  const cliente = await Cliente.findByIdAndDelete(req.params.id);
  return res.status(200).send({ message: 'Cliente excluído com sucesso!', cliente });
};
