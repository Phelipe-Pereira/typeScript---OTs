class Pessoa {
    nome: string;
    idade: number;

    constructor (nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever(): string {
        return `Nome: ${this.nome}, Idade: ${this.idade}`;
    }
}

let pessoa1 = new Pessoa('Maria', 30);
console.log(pessoa1.descrever());



class Empregado extends Pessoa {
    salario: number;

    constructor(nome: string, idade: number, salario: number) {
        super(nome, idade);
        this.salario = salario;
    }

    descrever(): string {
        return `${super.descrever()}, Salário: R$${this.salario}`;
    }
}

let empregado1 = new Empregado('João', 20, 1000);
console.log(empregado1.descrever());


class Conta {
    private saldo: number;

    constructor (saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar (valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    obterSaldo (): number {
        return this.saldo;
    }

    protected calcularJuros (taxa: number ): void {
        this.saldo += this.saldo * taxa;
    }
}

let minhaConta = new Conta(1000);
minhaConta.depositar(500);
console.log(`Saldo atualo: R${minhaConta.obterSaldo()}`);


class ContaPoupanca extends Conta {
    calcularJuros(taxa: number): void {
        super.calcularJuros(0.2);
    }
}

let poupanca = new ContaPoupanca(1000);
console.log(`Saldo com juros: R${poupanca.obterSaldo()}`);


class ContaCorrente extends Conta {
    calcularJuros(taxa: number): void {
        super.calcularJuros(0.5);
    }
}

let contaCorrente = new ContaCorrente(10);
console.log(`Saldo com juros: R${contaCorrente.obterSaldo()}`);
