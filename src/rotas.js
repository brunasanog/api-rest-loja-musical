const express = require('express');
const rotas = express();

const {
    listaEstoque,
    adicionarInstrumento,
    removerInstrumento,
    apagarInstrumento } = require('./controladores/controladores');

rotas.get('/estoque', listaEstoque);

rotas.post('/estoque/adicionar', adicionarInstrumento);

rotas.put('/estoque/remover', removerInstrumento);

rotas.delete('/estoque/apagar', apagarInstrumento);

module.exports = {
    rotas,
}