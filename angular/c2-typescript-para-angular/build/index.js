"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printaObjeto(pessoa) {
    console.log(pessoa);
}
printaObjeto({
    name: "bruce wayne",
    vulgo: "batman",
});
// tipos de variáveis: 
// tipos abrangentes: any, void
let retorno;
let retornoView = false;
// objeto - sem previsibilidade
let produto = {
    name: "leticia",
    cidade: "sp",
    idade: 30,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 100
};
/**
 * arrays
 */
let dados = ["leticia", "ana", "adriana"];
let dados2 = ["leticia", "ana", "adriana"];
let infos = ["leticia", 24, 1.68];
/**
 * tuplas
 */
let boleto = ["água conta", 199.9, 32342342];
/**
 * Datas
 */
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
// funções
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log(soma);
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("Leticia"));
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone(34995874521));
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "leticia";
    });
}
const bot1 = {
    id: 1,
    name: "megaman",
};
const bot2 = {
    id: 1,
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot1, bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello, i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
