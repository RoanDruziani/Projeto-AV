/**
 * Arquivo: models/funcionario.js
 * Descrição: arquivo responsável pelo modelo da classe 'Funcionário' da aplicação.
 * Data: 02/06/2019
 * Author: Glaucia Lemos
 */

/**
 * Classe: Funcionario
 *
 * id: (Number - guid gerado pelo MongoDb)
 * nomeFuncionario: String
 * cargo: String
 * numeroIdentificador: Number
 *
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clienteSchema = new Schema({
  // nomeFuncionario: { type: String, required: true, maxlength: 50 },
  // cargo: { type: String, required: true, maxlength: 30 },
  // numeroIdentificador: { type: Number, required: true },
  emailCliente: {type: String, required: true, maxlength: 100 },
  senhaCliente: {type: String, required: true, maxlength: 100 },
  enderecoCliente: {type: String, required: true, maxlength: 100 },
  complementoCliente: {type: String, required: true, maxlength: 100 },
  cidadeCliente: {type: String, required: true, maxlength: 100 },
  estadoCliente: {type: String, required: true, maxlength: 100 },
  cepCliente: {type: String, required: true, maxlength: 100 },

}, {
  timestamps: true,
  collection: 'funcionarios',
});

module.exports = mongoose.model('Funcionario', funcionarioSchema);
