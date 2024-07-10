const prompt = require("prompt-sync")();
const concessionaria = require ("./index.js")

function mostrarMenu(){
    console.log("Bem vindo a concessionaria Vinicius,escolha uma opcao:\n1.adicionar carro \n.2 remover carro \n.3 listar todos os carros\n.4 atualizar carro")
}