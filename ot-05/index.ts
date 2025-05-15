interface Usuario {
    nome: string;
    idade: number;
};

function imprimeUsuario(usuario: Usuario): void {
    console.log(`Nome ${usuario.nome}, Idade: ${usuario.idade}`);
};

interface Produto {
    nome: string;
    preco: number;
    descrever?(): string;
};

function etiquetaProduto(produto: Produto): string {
    return produto.descrever ? produto.descrever() : `${produto.nome} custa R$${produto.preco}`
};


type ProcessadorPagamento = (quantia: number, conta: string) => boolean;
function processarPagamento(processador: ProcessadorPagamento, quantia: number, conta: string) {
    return processador(quantia, conta)
};

type EntradaFormulario = string | number;
function entradaDados(campo: string, valor: EntradaFormulario) {
    console.log(`Entrada para ${campo} : ${valor}`);
};

interface Contato {
    email: string;
    telefone: string;
};

function criarContato(email: string, telefone: string): Contato {
    return {
        email: email,
        telefone: telefone
    };
};

type OperacaoMatematica = (a: number, b: number) => number;

const soma: OperacaoMatematica = (a: number, b: number): number => {
    return a + b;
};

const subtracao: OperacaoMatematica = (a: number, b: number): number => {
    return a - b;
};

const multiplicacao: OperacaoMatematica = (a: number, b: number): number => {
    return a * b;
};

const divisao: OperacaoMatematica = (a: number, b: number): number => {
    return a / b;
};


