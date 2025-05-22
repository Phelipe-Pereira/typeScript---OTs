function identidade<T> (arg: T): T {
    return arg
}

let saidaString = identidade<string>("Minha string");
let saidaNumber = identidade<Number>(1);

interface ParGenerico<K, T> {
    chave: K;
    valor: T;
}

let item: ParGenerico<number, number> = {
    chave: 1,
    valor: 2
};

class Caixa<T> {
    conteudo: T
    constructor (valor: T) {
        this.conteudo = valor;
    }
}

let caixaString = new Caixa<string>("Hello World");
let caixaNumber = new Caixa<number>(20);

function tamanho<T extends { length: number}> (arg: T): number {
    return arg.length
}
/* 
    Neste caso, nós estamos usando o extends { length: number}, que se trata de uma restrição ao tipo utilizada no generic;
    Esta restrição significa que T deve obrigatoriamente ter a propriedade length do tipo number.
    Ou seja, você só pode passar para essa função valores que tenham .length (como string, array, etc).
*/


let tamanhoString = tamanho("Teste");
let tamanhoArray = tamanho([1,2,3])
//let tamanhoNumer = tamanho(1) dará erro, pois, number não possui .length


interface PrimeiroElemento<T extends any[]> {
    retornaPrimeiroElemento(lista: T): T[0];
}

interface Stack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
}

class MinhaPilha<T> implements Stack<T> {
    private itens: T[] = [];

    push(item: T): void {
        this.itens.push(item);
    }

    pop(): T | undefined {
        return this.itens.pop();
    }

    peek(): T | undefined {
        return this.itens[this.itens.length - 1];
    }

    isEmpty(): boolean {
        return this.itens.length === 0;
    }
}

class Mapa<K, V> {
    private itens: { chave: K; valor: V }[] = [];

    adicionar(chave: K, valor: V): void {
        const existente = this.itens.find(item => item.chave === chave);
        if (existente) {
            existente.valor = valor;
        } else {
            this.itens.push({ chave, valor });
        }
    }

    buscar(chave: K): V | undefined {
        const item = this.itens.find(item => item.chave === chave);
        return item?.valor;
    }
}
const mapa = new Mapa<string, number>();
mapa.adicionar("idade", 21);
console.log(mapa.buscar("idade")); // 21

function processarTextoOuLista<T extends string | string[]>(entrada: T): string {
    if (typeof entrada === "string") {
        return `Texto: ${entrada}`;
    }

    return `Lista com ${entrada.length} itens: ${entrada.join(", ")}`;
}

console.log(processarTextoOuLista("Olá"));              
console.log(processarTextoOuLista(["Oi", "Tchau"]));    

function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}
const usuario = { nome: "Lipe" };
const endereco = { cidade: "Joinville", estado: "SC" };

const resultado = mergeObjects(usuario, endereco);
