# 🎮 Jogo do Herói - Classe em JavaScript

## 📌 Sobre o Projeto

Este projeto foi desenvolvido como parte de um desafio de programação que simula a criação de um sistema para um jogo de aventura. 
O objetivo é demonstrar o uso de **classes, objetos, estruturas de decisão e métodos** em JavaScript.

O programa cria diferentes tipos de heróis (mago, guerreiro, monge e ninja) e cada um possui um estilo de ataque único, de acordo com seu tipo.

---

## 🎯 Funcionalidade

O programa:
1. Define uma classe chamada `Heroi`
2. Cada herói possui **nome**, **idade** e **tipo**
3. O método `atacar()` exibe uma mensagem personalizada conforme o tipo do herói

### Tabela de Ataques

| Tipo | Ataque |
|------|--------|
| Mago | usou magia |
| Guerreiro | usou espada |
| Monge | usou artes marciais |
| Ninja | usou shuriken |

### Exemplo de Saída

O mago atacou usando: usou magia
O guerreiro atacou usando: usou espada
O monge atacou usando: usou artes marciais
O ninja atacou usando: usou shuriken


---

## 🛠️ Tecnologias Utilizadas

- **JavaScript** (Node.js)
- Git para versionamento
- GitHub para hospedagem do código

---

## 📂 Estrutura do Projeto
projeto-heroi/
├── heroi.js # Código principal
└── README.md # Documentação do projeto

## 🚀 Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado no computador
- Um editor de código (recomendo [VS Code](https://code.visualstudio.com/))

  CÓDIGO COMPLETO

  
---

## 📖 Código

```javascript
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

const mago = new Heroi("Merlin", 150, "mago");
const guerreiro = new Heroi("Arthur", 30, "guerreiro");
const monge = new Heroi("Lee", 45, "monge");
const ninja = new Heroi("Hanzo", 25, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();

Autor
(João) Paullo Ferreira
