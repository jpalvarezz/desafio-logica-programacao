let nomeHeroi = "João";
let XP = 9002;
let nivel = ""

if(XP<=1000){
    nivel = "Ferro"
} else if(XP<=2000){
    nivel = "Bronze"
} else if (XP <= 5000){
    nivel = "Prata"
} else if (XP <= 7000){
    nivel = "Ouro"
} else if(XP<8000){
    nivel = "Platina"
} else if (XP <= 9000){
    nivel = "Ascendente"
} else if (XP <= 10000){
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}
console.log("O Heroi de nome " + nomeHeroi + " está no nível de " + nivel)