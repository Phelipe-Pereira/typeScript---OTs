class Carro {
    constructor(
        public marca: string,
        public modelo: string,
        public ano: number
    ) {}

    detalharCarro(): void {
        console.log(`Este é o ${this.modelo} da marca ${this.marca} e seu ano é ${this.ano}`);
    }
}

let onix = new Carro('chevrolet', 'Onix', 2019);
onix.detalharCarro();

class CarroEletrico extends Carro {
    constructor(
        marca: string,
        modelo: string,
        ano: number,
        public capacidadeBateriaEmAmp: string
    ) {
        super(marca, modelo, ano);
    }

    override detalharCarro(): void {
        console.log(`Este é o ${this.modelo} da marca ${this.marca}, seu ano é ${this.ano} e sua capacidade de bateria em Amp é ${this.capacidadeBateriaEmAmp}`);
    }
}

//Desafio 4 deixarei no outro arquivo por já existe classe Conta.

interface Motorizavel {
    motorLigado: boolean;
    ligarMotor(): void;
    DesligarMotor(): void;
}

class Barco implements Motorizavel{
    motorLigado: boolean = false;
    
    ligarMotor(): void {
        this.motorLigado = true;
        console.log("Motor ligado")
    }

    DesligarMotor(): void {
        this.motorLigado = false;
        console.log("Motor Desligado")
    }
}

class MotoCicleta implements Motorizavel{
    motorLigado: boolean = false;
    
    ligarMotor(): void {
        this.motorLigado = true;
        console.log("Motor ligado")
    }

    DesligarMotor(): void {
        this.motorLigado = false;
        console.log("Motor Desligado")
    }
}
