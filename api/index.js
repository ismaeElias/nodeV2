const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("config");
const roteador = require("./Routes/fornecedores");

app.use( bodyParser.json());

app.use('/api/fornecedores', roteador);

app.listen(config.get('api.porta'), () => console.log('Api rodando'));