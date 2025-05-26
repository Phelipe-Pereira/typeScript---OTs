// 1. Trabalhando com Union e Intersection
type Pessoa = {
    nome: string;
    idade: number;
};

type Profissional = {
    cargo: string;
    empresa: string;
};

// Tipo de interseção
type PessoaProfissional = Pessoa & Profissional;

// Função que aceita union e intersection
function processarDados(id: string | number, pessoa: PessoaProfissional): void {
    console.log(`ID: ${id}`);
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Cargo: ${pessoa.cargo}`);
}

// 2. Explorando Conditional Types
type ResultadoCondicional<T extends boolean> = T extends true ? string : number;

function processarValor<T extends boolean>(condicao: T): ResultadoCondicional<T> {
    if (condicao) {
        return "Verdadeiro" as ResultadoCondicional<T>;
    } else {
        return 0 as ResultadoCondicional<T>;
    }
}

// 3. Aplicando Partial e Readonly
interface ConfiguracaoApp {
    tema: string;
    idioma: string;
    notificacoes: boolean;
}

function atualizarConfig(config: Partial<ConfiguracaoApp>): void {
    // Implementação da atualização
    console.log("Configurações atualizadas:", config);
}

function visualizarDados(dados: Readonly<ConfiguracaoApp>): void {
    console.log("Dados (somente leitura):", dados);
    // dados.tema = "novo"; // Isso causaria um erro
}

// 4. Utilizando Record
type Capitais = Record<string, string>;

function gerenciarCapitais(): {
    adicionarCapital: (pais: string, capital: string) => void;
    buscarCapital: (pais: string) => string | undefined;
} {
    const capitais: Capitais = {
        "Brasil": "Brasília",
        "Portugal": "Lisboa",
        "França": "Paris"
    };

    return {
        adicionarCapital: (pais: string, capital: string) => {
            capitais[pais] = capital;
        },
        buscarCapital: (pais: string) => capitais[pais]
    };
}

// 5. Generics com Utilitários
function criarListaParcial<T>(items: T[]): Partial<T>[] {
    return items.map(item => {
        const parcial: Partial<T> = {};
        for (const key in item) {
            if (Math.random() > 0.5) { // Aleatoriamente inclui propriedades
                parcial[key] = item[key];
            }
        }
        return parcial;
    });
}

// Exemplos de uso
const pessoa: PessoaProfissional = {
    nome: "João",
    idade: 30,
    cargo: "Desenvolvedor",
    empresa: "TechCorp"
};

// Testando as funções
processarDados("123", pessoa);
processarDados(456, pessoa);

const resultadoTrue = processarValor(true); // retorna string
const resultadoFalse = processarValor(false); // retorna number

atualizarConfig({ tema: "escuro" });

const configCompleta: ConfiguracaoApp = {
    tema: "claro",
    idioma: "pt-BR",
    notificacoes: true
};

visualizarDados(configCompleta);

const gerenciador = gerenciarCapitais();
gerenciador.adicionarCapital("Espanha", "Madrid");
console.log(gerenciador.buscarCapital("Brasil")); // Retorna "Brasília"

// Exemplo de uso do Generic com Partial
interface Usuario {
    nome: string;
    email: string;
    senha: string;
}

const usuarios: Usuario[] = [
    { nome: "Maria", email: "maria@email.com", senha: "123" },
    { nome: "Pedro", email: "pedro@email.com", senha: "456" }
];

const listasParciais = criarListaParcial(usuarios);
console.log(listasParciais);

type NumeroouString = number | string;
function exibirId(id: NumeroouString) {
    console.log(`O ID é ${id}`);
}

exibirId("123");
exibirId(123);

interface Negocio {
    nome: string;
    fundacao: Date;
}

interface Empregador {
    quantidade: number;
}

type Empresa = Negocio & Empregador;
let minhaEmpresa: Empresa = {
    nome: "TechCorp",
    fundacao: new Date("2020-01-01"),
    quantidade: 100
}

type PequenoOuGrande<T> = T extends "pequeno" ? number: string;

let tamanhoPequeno: PequenoOuGrande<"pequeno"> = 10;
let tamanhoGrande: PequenoOuGrande<"grande"> = "Muito grande";

interface Carro {
    marca: string;
    modelo: string;
    ano: number;
}

function configurarCarro(config: Partial <Carro>) {
    return config
}

configurarCarro({modelo: "Corolla"});

type CarroReadonly = Readonly<Carro>;
let meuCarro: CarroReadonly = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
}

let cidades: Record<string, string> = {
    "São Paulo": "SP",
    "Rio de Janeiro": "RJ",
    "Brasília": "DF"
}

// Novos Exercícios

// 1. Trabalhando com Union e Intersection
type Animal = {
    nome: string;
    especie: string;
};

type Pet = {
    dono: string;
    idade: number;
};

// Tipo de interseção para animais de estimação
type AnimalPet = Animal & Pet;

function registrarPet(id: string | number, pet: AnimalPet): void {
    console.log(`ID do Pet: ${id}`);
    console.log(`Nome: ${pet.nome}`);
    console.log(`Dono: ${pet.dono}`);
}

// 2. Explorando Conditional Types
type TipoResposta<T extends boolean> = T extends true ? "Aprovado" : "Reprovado";

function avaliarNota<T extends boolean>(passou: T): TipoResposta<T> {
    if (passou) {
        return "Aprovado" as TipoResposta<T>;
    } else {
        return "Reprovado" as TipoResposta<T>;
    }
}

// 3. Aplicando Partial e Readonly
interface ConfiguracaoJogo {
    dificuldade: string;
    som: boolean;
    grafico: string;
}

function atualizarConfigJogo(config: Partial<ConfiguracaoJogo>): void {
    console.log("Configurações do jogo atualizadas:", config);
}

function verConfigJogo(config: Readonly<ConfiguracaoJogo>): void {
    console.log("Configurações atuais:", config);
}

// 4. Utilizando Record
type Populacao = Record<string, number>;

function gerenciarPopulacao(): {
    adicionarCidade: (cidade: string, habitantes: number) => void;
    buscarPopulacao: (cidade: string) => number | undefined;
} {
    const populacoes: Populacao = {
        "São Paulo": 12396372,
        "Rio de Janeiro": 6775561,
        "Brasília": 3094325
    };

    return {
        adicionarCidade: (cidade: string, habitantes: number) => {
            populacoes[cidade] = habitantes;
        },
        buscarPopulacao: (cidade: string) => populacoes[cidade]
    };
}

// 5. Generics com Utilitários
function criarListaOpcional<T extends object>(items: T[]): Partial<T>[] {
    return items.map(item => {
        const opcional: Partial<T> = {};
        const chaves = Object.keys(item) as (keyof T)[];
        chaves.forEach(chave => {
            if (Math.random() > 0.3) { // 70% de chance de incluir cada propriedade
                opcional[chave] = item[chave];
            }
        });
        return opcional;
    });
}

// Exemplos de uso dos novos exercícios
const meuPet: AnimalPet = {
    nome: "Rex",
    especie: "Cachorro",
    dono: "Ana",
    idade: 5
};

registrarPet("PET001", meuPet);
registrarPet(12345, meuPet);

const resultadoProva = avaliarNota(true);
console.log("Resultado da avaliação:", resultadoProva);

const configJogo: ConfiguracaoJogo = {
    dificuldade: "médio",
    som: true,
    grafico: "alto"
};

atualizarConfigJogo({ dificuldade: "difícil" });
verConfigJogo(configJogo);

const gerenciadorPopulacao = gerenciarPopulacao();
gerenciadorPopulacao.adicionarCidade("Curitiba", 1948626);
console.log(gerenciadorPopulacao.buscarPopulacao("São Paulo"));

interface Produto {
    nome: string;
    preco: number;
    estoque: number;
}

const produtos: Produto[] = [
    { nome: "Notebook", preco: 3500, estoque: 10 },
    { nome: "Smartphone", preco: 2000, estoque: 15 }
];

const produtosOpcionais = criarListaOpcional(produtos);
console.log("Produtos com propriedades opcionais:", produtosOpcionais);

