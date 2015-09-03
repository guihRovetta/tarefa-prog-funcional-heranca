function Animal(nome) {
    this.nome = nome || 'Sem nome';
}

var animalPrototipo = {
    fazerBarulho: function () {
        throw 'Deve ser implementado';
    }
};
Animal.prototype = animalPrototipo;

function Cao(nome) {
    Animal.call(this, nome);
}

var caoPrototipo = {
    fazerBarulho: function () {
        return this.nome + ' - AUAUAUAU!';
    }
};
caoPrototipo.prototype = Animal.prototype;
Cao.prototype = caoPrototipo;

function Gato(nome) {
    Animal.call(this, nome);
}

var gatoPrototipo = {
    fazerBarulho: function () {
        return this.nome + ' - MIAUUUUUU!';
    }
};
gatoPrototipo.prototype = Animal.prototype;
Gato.prototype = gatoPrototipo;

function Manada() {
    this.lista = [];
}
var manadaPrototipo = {
    adicionarAnimal(animal) {
            this.lista.push(animal);
        },

        imprimirAnimal: function () {
            throw 'Deve ser implementado';
        }
};
Manada.prototype = manadaPrototipo;

function ManadaVirgula() {
    Manada.call(this);
}

var manadaVirgulaPrototipo = new Manada();
manadaVirgulaPrototipo.imprimirAnimal = function () {
    var virgula = "";
    for (i = 0; i < this.lista.length; i++) {
        virgula += this.lista[i].fazerBarulho() + ' , ';
    }

    return virgula;
};
manadaVirgulaPrototipo.prototype = Manada.prototype;
ManadaVirgula.prototype = manadaVirgulaPrototipo;

function ManadaSustenido() {
    Manada.call(this);
}

var manadaSustenidoPrototipo = new Manada();
manadaSustenidoPrototipo.imprimirAnimal = function () {
    var sustenido = "";
    for (i = 0; i < this.lista.length; i++) {
        sustenido += this.lista[i].fazerBarulho() + ' # ';
    }

    return sustenido;
};
manadaSustenidoPrototipo.prototype = Manada.prototype;
ManadaSustenido.prototype = manadaSustenidoPrototipo;

var gato = new Gato('Garfield');
var cao = new Cao('Pateta');

var manadaVirgula = new ManadaVirgula();
manadaVirgula.adicionarAnimal(cao);
manadaVirgula.adicionarAnimal(gato);
var manadaSustenido = new ManadaSustenido();
manadaSustenido.adicionarAnimal(cao);
manadaSustenido.adicionarAnimal(gato);

console.log('==> Manada Sustenido');
console.log(manadaSustenido.imprimirAnimal());
console.log('==> Manada Virgula');
console.log(manadaVirgula.imprimirAnimal());