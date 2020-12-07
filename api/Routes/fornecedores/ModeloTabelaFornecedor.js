const Sequelize = require("sequelize");
const instancia = require("../../bando-de-dados/");
const colunas = {
    empresa : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    categoria : {
        type : Sequelize.ENUM('RAÇÃO', 'BRINQUEDOS'),
        allowNull : false,
    },
}
const opcoes = {
    freezeTableName : true,
    tableName : 'fornecedores',
    timestamps : true,
    createdAt : 'DataCriacao',
    updateAt : 'DataAtualizacao',
    version : 'versao'
}
module.exports = instancia.define('fornecedor', colunas, opcoes)