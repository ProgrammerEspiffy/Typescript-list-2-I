"use strict";
// Exercício 1
let Nums = [10, 12, 15, 20, 22];
let numCal = 5;
let Result = [];
for (let i = 0; i < Nums.length; i++) {
    Result[i] = Nums[i] * numCal;
}
console.log(Result);
// Exercício 2
const Multiplicar = (n1, n2) => {
    return n1 * n2;
};
let numeroMultiplicar = Multiplicar(40, 80);
console.log(numeroMultiplicar);
// Exercício 3
let Idade = 21;
if (Idade > 20) {
    let Idade = true;
    console.log(Idade);
}
else {
    let Idade = false;
    console.log(Idade);
}
// Exercício 4
let DataAtual = new Date();
let DataDeAniversario = new Date(2022, 5, 5);
if (DataDeAniversario.getMonth() > DataAtual.getMonth()) {
    console.log("Não Foi Feito =(");
}
else if (DataDeAniversario.getMonth() < DataAtual.getMonth()) {
    console.log("Vai Já fez =I");
}
else {
    if (DataDeAniversario.getDate() > DataAtual.getDate()) {
        console.log("Vai Passar Ainda :P");
    }
    else if (DataDeAniversario.getDate() < DataAtual.getDate()) {
        console.log(" Pera Você Já Fez Aniversário :)");
    }
    else {
        console.log("Parabéns pra Você nesta Data Querida =D");
    }
}
