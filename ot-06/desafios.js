"use strict";
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    detalharCarro(carro) {
        return console.log(`Este é o ${carro.modelo} da marca ${carro.marca} e seu ano é ${carro.ano}`);
    }
}
let onix = new Carro('chevrolet', 'Onix', 2019);
onix.detalharCarro(onix);
