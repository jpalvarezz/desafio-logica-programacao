class Hero {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let arma
        if (this.tipo == "mago"){
            arma = "magia"
        } else if (this.tipo == "guerreiro"){
            arma = "espada"
        } else if (this.tipo == "monge"){
            arma = "artes marciais"
        } else {
            arma = "shuriken"
        }
        console.log("O " + this.tipo + " chamado(a) " + this.nome + " de " + this.idade + " anos atacou usando " + arma)
        
    }
}

let ninja = new Hero("Kitsune", 34, "ninja")
let mago = new Hero("Darak", 150, "mago")
let guerreiro = new Hero("Jason", 27, "guerreiro")
let monge = new Hero("Mao", 87, "monge")

ninja.atacar()
mago.atacar()
guerreiro.atacar()
monge.atacar()