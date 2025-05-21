"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    descrever() {
        return `Nome: ${this.nome}, Idade: ${this.idade}`;
    }
}
let pessoa1 = new Pessoa('Maria', 30);
console.log(pessoa1.descrever());
class Empregado extends Pessoa {
    constructor(nome, idade, salario) {
        super(nome, idade);
        this.salario = salario;
    }
    descrever() {
        return `${super.descrever()}, Salário: R$${this.salario}`;
    }
}
let empregado1 = new Empregado('João', 20, 1000);
console.log(empregado1.descrever());
class Conta {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
    }
    obterSaldo() {
        return this.saldo;
    }
    calcularJuros(taxa) {
        this.saldo += this.saldo * taxa;
    }
}
let minhaConta = new Conta(1000);
minhaConta.depositar(500);
console.log(`Saldo atualo: R${minhaConta.obterSaldo()}`);
class ContaPoupanca extends Conta {
    calcularJuros(taxa) {
        super.calcularJuros(0.2);
    }
}
let poupanca = new ContaPoupanca(1000);
console.log(`Saldo com juros: R${poupanca.obterSaldo()}`);
