let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ["João", "Vera", "Phelipe"];

let frutas: Array<string> = ["Maça", "Banana", "Manga"];
let pontos: Array<number> = [9.5, 7.3, 8.6];

numeros.push(6);
let ultimoNumero = numeros.pop();
let primeiroNumero = numeros[0];

let primeiroNome = nomes[0];

numeros.forEach((numero) => {
  console.log(numero);
});

let numerosFiltrados = numeros.filter((n) => n > 2);

let soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);

let cidades: string[] = [
  "São Paulo",
  "Rio de Janeiro",
  "Curitiba",
  "Salvador",
  "Manaus",
];
console.log("Terceira cidade:", cidades[2]);

let numerosSequencia: number[] = [10, 20, 30, 40, 50];
let indice = numerosSequencia.indexOf(30);
numerosSequencia.splice(indice + 1, 0, 35);
numerosSequencia = numerosSequencia.filter((num) => num !== 20);
console.log("Array após modificações:", numerosSequencia);

let numerosOriginais: number[] = [1, 2, 3, 4, 5];
let numerosMultiplicados = numerosOriginais.map((num) => num * 3);
console.log("Números multiplicados por 3:", numerosMultiplicados);

let numerosSequenciais: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosImpares = numerosSequenciais.filter((num) => num % 2 !== 0);
console.log("Números ímpares:", numerosImpares);

let numerosParaSoma: number[] = [5, 7, 10, 12, 15];
let somaTotal = numerosParaSoma.reduce(
  (acumulador, atual) => acumulador + atual,
  0
);
console.log("Soma total:", somaTotal);

function printar<Type>(arg: Type): Type {
    console.log(`Teste ${arg}`); 
    return arg;
};

printar<string>("Teste");
printar<number>(1);