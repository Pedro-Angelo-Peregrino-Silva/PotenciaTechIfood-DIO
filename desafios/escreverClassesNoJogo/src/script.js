class hero {
    constructor(heroName, heroAge, heroClass) {
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroClass = heroClass
    }

    heroAttack() {
        let attackType;

        switch (true) {
            case this.heroClass === "Mago":
                attackType = "usando magia"
                break
            case this.heroClass === "Guerreiro":
                attackType = "usando espada"
                break
            case this.heroClass === "Monge":
                attackType = "usando artes marciais"
                break
            case this.heroClass === "Ninja":
                attackType = "usando shuriken"
                break
        }
        
        console.log(`O ${this.heroClass} atacou ${attackType}`)

    }
}

const myHero = new hero("Link", 25, "Guerreiro")

myHero.heroAttack()
