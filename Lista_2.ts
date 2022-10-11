// Exercício 1

let Nums: Array<number> = [10,12,15,20,22];
let numCal: number = 5
let Result: Array<number> = [];

for (let i = 0; i < Nums.length; i++) {
    Result[i] = Nums[i] * numCal
}

console.log(Result);

// Exercício 2

const Multiplicar = (n1:number, n2:number):number => {
    return n1 * n2;
}

let numeroMultiplicar: number = Multiplicar(40, 80)

console.log(numeroMultiplicar);

// Exercício 3

let Idade: number = 21;

if (Idade > 20) {
   let Idade: boolean = true;
   console.log(Idade);
   
}
else{
    let Idade: boolean = false;
    console.log(Idade);
    
}

// Exercício 4

let DataAtual: Date = new Date()

let DataDeAniversario: Date = new Date(2022, 5, 5)

if(DataDeAniversario.getMonth() > DataAtual.getMonth()){
    console.log("Não Foi Feito =(");
}
else if(DataDeAniversario.getMonth() < DataAtual.getMonth()){
    console.log("Vai Já fez =I");
}
else{
    if(DataDeAniversario.getDate() > DataAtual.getDate()){
        console.log("Vai Passar Ainda :P");
        
    }

    else if(DataDeAniversario.getDate() < DataAtual.getDate()) {
        console.log(" Pera Você Já Fez Aniversário :)");
        
    }
    else{
        console.log("Parabéns pra Você nesta Data Querida =D");
    }
}