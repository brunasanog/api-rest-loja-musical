const express = require('express');
const rotas = express();

const { listaEstoque } = require('./controladores/controladores');

rotas.get('/estoque', listaEstoque);












module.exports = {
    rotas,
}