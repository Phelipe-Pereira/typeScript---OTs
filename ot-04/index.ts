//normal function
function soma (a: number, b: number): number {
    return a + b
};

//arrow function
const multiplica = (x: number, y: number): number => x * y;

//optional parameters
//? ao lado da variavel faz com que seja uma variavel opcional
function saudacao(nome: string, sobrenome?: string, titulo?: string): string {
    return `{Olá, ${titulo} ${nome} ${sobrenome} }!`;
};

//Parameter with default value
function potencia(base: number, expoente: number = 2): number {
    return base ** expoente;
};

//Tipos avançados em funções
type OperacaoMatematica = (x: number, y: number) => number;
const subtrai: OperacaoMatematica = (x, y) => x - y 

//overloads em função
//função qual pode receber 1 ou mais tipos de parametros diferentes e retornar tipos diferentes
function ajustarValor(valor: string): number;
function ajustarValor(valor: string): string;
function ajustarValor(valor: any): any {
    return typeof valor === 'number' ? valor.toFixed(2) : valor.trim();
};

function concatenNomes (nome: string, sobrenome: string): string {
    return nome + sobrenome
};

const somaArrow = (x: number, y: number): number => x + y;

// Função com sobrecarga correta
function ajustar(valor: number | string): string {
    if (typeof valor === 'number') {
        return valor.toFixed(2);
    } else {
        return valor.trim();
    }
}


function incrementa(base: number, incremento: number = 1): number {
    return base + incremento;
};