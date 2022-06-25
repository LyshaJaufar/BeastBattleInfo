export default class Accessories {
    constructor(accessories = initialise()) {
        this.accessories = accessories
    }
}

class Accessory {
    constructor(name, description, image) {
        this.name = name
        this.description = description
        this.image = image
    }
}

function initialise() {
    return [
        new Accessory("Balisk's Claw", 
        "Owner may draw two cards at random from the opponent's deck. Opponent is not allowed to choose nor peek at the card.",
        "assets/balisk'sclaw.png"),
        new Accessory("BloodBloar's Deathstar", 
        "Counters any OP beast; AGE: 400+, POWER: 280+, MAGIC: 190+, FEAR: 90+", 
        "assets/bloodboar'sdeathstar.png"),
        new Accessory("Burnstone",
        "Opponent discards beasts from their deck double to the number of place cards they have.", 
        "assets/burnstone.png")
    ]
}
