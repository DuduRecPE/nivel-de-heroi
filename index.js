let nomeHeroi = "MaxMeg";
let quantidadeXP = 33000;
let nivelHeroi = "";

if (quantidadeXP <= 1000) {
    nivelHeroi = "Ferro"
} else if (quantidadeXP <= 2000) {
    nivelHeroi = "Bronze";
} else if (quantidadeXP <= 5000) {
    nivelHeroi = "Prata";
} else if (quantidadeXP <= 7000) {
    nivelHeroi = "Ouro";
} else if (quantidadeXP <= 8000) {
    nivelHeroi = "Platina";
} else if (quantidadeXP <= 9000) {
    nivelHeroi = "Ascendente";
} else if (quantidadeXP <= 10000) {
    nivelHeroi = "Imortal";
} else if (quantidadeXP >= 10001) {
    nivelHeroi = "Radiante"
}

console.log("O herói de nome " + nomeHeroi + " está no nível: " + nivelHeroi)