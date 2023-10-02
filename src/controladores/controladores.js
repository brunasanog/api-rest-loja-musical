const { instrumentos } = require('../bancodedados');


function listaEstoque(req, res) {

    if (instrumentos.length !== 0) {
        return res.json(instrumentos);
    } else {
        return res.status(404).json({ mensagem: "Nenhum instrumento encontrado" });
    }

}













module.exports = {
    listaEstoque,
}