function calculaIdade(anos) {
    return `Daqui ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;

}

const pessoa1 = {
    nome: "Yagi",
    idade: 55,
};

const pessoa2 = {
    nome: "Bakugou",
    idade: 16,
};

const pessoa3 = {
    nome: "Midoriya",
    idade: 16,
};

const pessoa4 = {
    nome: "Asta",
    idade: 18,
};

const pessoa5 = {
    nome: "Yami",
    idade: 29,
};

console.log(calculaIdade.call(pessoa2, 5));

/* Usando o metodo "Apply"

console.log(calculaIdade.apply(pessoa4, [20]));