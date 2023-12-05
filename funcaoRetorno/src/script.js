let userName = "Pedro Ângelo Peregrino e Silva"

function getFirstName(name) {
    let firstName = name.split(" ")[0]
    return firstName
}

function getLastName(name) {
    let lastName = name.split(" ").slice(1).join(" ");
    return lastName;
}

console.log("O primeiro nome do usuário é: " + getFirstName(userName))
console.log("O resto do nome do usuário é: " + getLastName(userName))