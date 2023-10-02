const express = require('express');
const rotas = express();

const {
    listaEstoque,
    adicionarInstrumento,
    removeInstrumento,
    apagaInstrumento } = require('./controladores/controladores');

rotas.get('/estoque', listaEstoque);

rotas.post('/estoque/adicionar', adicionarInstrumento);

rotas.put('/estoque/remover', removeInstrumento);

rotas.delete('/estoque/apagar', apagaInstrumento);

module.exports = {
    rotas,
}