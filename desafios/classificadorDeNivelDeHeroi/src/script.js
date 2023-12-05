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

//Utilizando o switch no lugar do if
let heroNameSwitch = "Goku";
let expHerSwitch = 7255;
let expClassificationSwitch = " ";

switch (true) {
    case expHero < 1000:
        expClassificationSwitch = "Ferro";
        break;
    case expHero > 1000 && expHero <= 2000:
        expClassificationSwitch = "Bronze";
        break;
    case expHero > 2000 && expHero <= 5000:
        expClassificationSwitch = "Prata";
        break;
    case expHero > 6000 && expHero <= 7000:
        expClassificationSwitch = "Ouro";
        break;
    case expHero > 7000 && expHero <= 8000:
        expClassificationSwitch = "Platina";
        break;
    case expHero > 8000 && expHero <= 9000:
        expClassificationSwitch = "Ascendente";
        break;
    case expHero > 9000 && expHero <= 10000:
        expClassificationSwitch = "Imortal";
        break;
    case expHero >= 10000:
        expClassificationSwitch = "Radiante";
        break;
    default:
        expClassificationSwitch = "Sem Classificação";
}

console.log("O Héroi " + heroNameSwitch + " possui nível de experiência suficiente para ser classificado como nível " + expClassificationSwitch + ".");
