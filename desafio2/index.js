let VD = getVD(100, 80)

function getVD(victory, defeat) {
    let rank = "";
    let saldo = victory - defeat;
        
    if (saldo <= 10) {
        rank = "Ferro";
    } else if (saldo <= 20) {
        rank = "Bronze";
    } else if (saldo <= 50) {
        rank = "Prata";
    } else if (saldo <= 80) {
        rank = "Ouro";
    } else if (saldo <= 90) {
        rank = "Diamante";
    } else if (saldo <= 100) {
        rank = "Lendário";
    } else {
        rank = "Imortal";
    }

    return { rank, saldo }; // Retornamos um objeto com os dois valores
}

console.log("O Herói tem saldo de vitórias de " + VD.saldo + " e está no rank " + VD.rank);
