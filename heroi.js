// Classe do Herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        }
        console.log(`O ${this.tipo} atacou usando: ${ataque}`);
    }
}

// Criando os herois

const heroi1 = new Heroi("Merlin", 150, "mago");
const heroi2 = new Heroi("Arthur", 30, "guerreiro");
const heroi3 = new Heroi("Lee", 45, "monge");
const heroi4 = new Heroi("Hanzo", 25, "ninja");

// Testando os ataques
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();