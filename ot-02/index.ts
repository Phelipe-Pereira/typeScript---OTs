let estaAtivo: boolean = true;
let total: number = 0;
let pi: number = 3.14159;

let numerosLista: number[] = [1,2,3];
let frutas: Array<string> = ["Maça", "Banana", "Cereja"];

let endereco: [string, number] = ["Av Paulista", 1578];

enum Cor {Vermelho, Verde, Azul};

let variavelIndefinida: any = 4;
variavelIndefinida = "Talvez uma string";

function alerta(): void {
    alert("Esta é a mensagem de alerta.")
};

console.log(`Esta variavel 'estaAtivo' é booleana e possui valor ${estaAtivo}`);
console.log(`Esta variavel 'total' é inteira e possui valor ${total}`);
console.log(`Esta variavel 'pi' é booleana e possui valor ${pi}`);

for (let numero in numerosLista) {
    console.log(`Estes é o um dos valores presentes no Array 'numerosLista' ${numero}`);
};

for (let fruta in frutas) {
    console.log(`Estes é umas das frutas presentes no Array 'frutas' ${fruta}`);
};

console.log(`O endereço completo é: ${endereco[0]}, ${endereco[1]}`);

console.log(`As cores disponíveis são: Vermelho (${Cor.Vermelho}), Verde (${Cor.Verde}), Azul (${Cor.Azul})`);

console.log(`O valor da variável indefinida é: ${variavelIndefinida}`);

