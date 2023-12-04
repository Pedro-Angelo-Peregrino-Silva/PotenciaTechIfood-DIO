//Desafio Classificador de XP do heroi
let heroName = "Link"
let expHero = 20000
let expClassification = " "


if (expHero < 1000) {
    expClassification = "Ferro"
} else if (expHero > 1000 && expHero <= 2000) {
    expClassification = "Bronze"
} else if (expHero > 2000 && expHero <= 5000) {
    expClassification = "Prata"
} else if (expHero > 6000 && expHero <= 7000) {
    expClassification = "Ouro"
} else if (expHero > 7000 && expHero <= 8000) {
    expClassification = "Platina"
} else if (expHero > 8000 && expHero <= 9000) {
    expClassification = "Ascendente"
} else if (expHero > 9000 && expHero <= 10000) {
    expClassification = "Imortal"
} else if (expHero >= 10000) {
    expClassification = "Radiante"
} else {
    expClassification = "Sem Classificação"
}

console.log("O Héroi " + heroName + " possui nível de experiência sufuciente para ser classificado como nível " + expClassification + ".")