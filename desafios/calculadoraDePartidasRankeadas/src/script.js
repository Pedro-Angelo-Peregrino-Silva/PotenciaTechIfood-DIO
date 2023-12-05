let heroName = "Luffy"
let numeroVitorias = 55
let numeroDerrotas = 12
let saldoVitorias = calcularSaldoVitorias(numeroVitorias, numeroDerrotas)
let nivelVitorias = classificarNivelVitorias(saldoVitorias)

function calcularSaldoVitorias(numeroVitorias, numeroDerrotas) {
    let resultado = numeroVitorias - numeroDerrotas
    return resultado
}

function classificarNivelVitorias(saldoVitorias) {
    let nivelVitorias

    switch (true) {
        case saldoVitorias < 10:
            nivelVitorias = "Ferro"
            break
        case saldoVitorias > 10 && saldoVitorias <= 20:
            nivelVitorias = "Bronze"
            break
        case saldoVitorias > 20 && saldoVitorias <= 50:
            nivelVitorias = "Prata"
            break
        case saldoVitorias > 50 && saldoVitorias <= 80:
            nivelVitorias = "Ouro"
            break
        case saldoVitorias > 80 && saldoVitorias <= 90:
            nivelVitorias = "Diamante"
            break
        case saldoVitorias > 90 && saldoVitorias <= 100:
            nivelVitorias = "Lendário"
            break
        case saldoVitorias > 100:
            nivelVitorias = "Imortal"
            break
    }
    return nivelVitorias

}

//Saída de dados
console.log("O Héroi " + heroName + " tem saldo de vitórias igual a " 
    + saldoVitorias + " estando no nível " + nivelVitorias + ".")