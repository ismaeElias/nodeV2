const ModeloTabela = require("../Routes/fornecedores/ModeloTabelaFornecedor");

ModeloTabela.sync().then(() => {
    console.log('Tabela criada com sucesso');
}).catch(console.log);