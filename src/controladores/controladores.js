const { instrumentos } = require('../bancodedados');


function listaEstoque(req, res) {

    if (instrumentos.length !== 0) {
        return res.json(instrumentos);
    } else {
        return res.status(404).json({ mensagem: "Nenhum instrumento encontrado" });
    }

}

function adicionarInstrumento(req, res) {
    const { instrumento, quantidade } = req.body;

    const instrumentoExistente = instrumentos.find((item) => item.instrumento === instrumento);

    if (instrumentoExistente) {

        instrumentoExistente.quantidade += quantidade;

        res.status(201).json({ mensagem: 'Instrumento cadastrado com sucesso!' });

    } else {

        const novoInstrumento = {
            instrumento: instrumento,
            quantidade: 1,
        };

        instrumentos.push(novoInstrumento);

        res.status(201).json(({ mensagem: 'Instrumento cadastrado com sucesso!' }));
    }
}

function removeInstrumento(req, res) {
    const { instrumento, quantidade } = req.query;

    const instrumentoExistente = instrumentos.find((item) => item.instrumento === instrumento);

    if (!instrumentoExistente) {
        return res.status(404).json({ mensagem: "Instrumento não encontrado" });
    }

    if (!quantidade || isNaN(parseInt(quantidade)) || parseInt(quantidade) <= 0) {
        return res.status(400).json({ mensagem: "Quantidade inválida" });
    }

    if (instrumentoExistente.quantidade < parseInt(quantidade)) {
        return res.status(400).json({ mensagem: "Quantidade a ser removida excede o estoque atual" });
    }

    instrumentoExistente.quantidade -= parseInt(quantidade);

    res.json({ mensagem: `Quantidade ${quantidade} do instrumento ${instrumento} removida com sucesso` });
}

function apagaInstrumento(req, res) {
    const { instrumento } = req.query;

    const instrumentoExistente = instrumentos.find((item) => item.instrumento === instrumento);

    if (!instrumentoExistente) {
        return res.status(404).json({ mensagem: "Instrumento não encontrado" });
    }

    instrumentos.splice(instrumentoExistente, 1);

    res.json({ mensagem: `Instrumento ${instrumento} removido com sucesso` });
}

module.exports = {
    listaEstoque,
    adicionarInstrumento,
    removeInstrumento,
    apagaInstrumento,
}