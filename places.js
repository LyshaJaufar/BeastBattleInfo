export default class Places {
    constructor(places = initialise()) {
        this.places = places
    }
}

class Place {
    constructor(name, description, image) {
        this.name = name
        this.description = description
        this.image = image
    }
}

function initialise() {
    return [
        new Place("Avantia", 
        "Beasts  in the lane 'AGE', will gain +10 infinitely until the opponent disables the card.",
        "https://github.com/LyshaJaufar/BeastBattleInfo/blob/master/assets/avantia.png?raw=true"),
        new Place("Gorgonia", 
        "Beasts  in the lane 'POWER', will gain +10 infinitely until the opponent disables the card.",
        "https://github.com/LyshaJaufar/BeastBattleInfo/blob/master/assets/gorgonia.png?raw=true"),
        new Place("King Hugo's Castle", 
        "Beasts  in the lane 'MAGIC', will gain +10 infinitely until the opponent disables the card.",
        "https://github.com/LyshaJaufar/BeastBattleInfo/blob/master/assets/kinghugo'scastle.png?raw=true"),
        new Place("Wicked Trees", 
        "Beasts  in the lane 'FEAR', will gain +10 infinitely until the opponent disables the card.",
        "https://github.com/LyshaJaufar/BeastBattleInfo/blob/master/assets/wickedtrees.png?raw=true"),
        new Place("Malvel's Castle", 
        "Beasts  in the lane 'AGE', will gain +10 infinitely until the opponent disables the card.",
        "https://github.com/LyshaJaufar/BeastBattleInfo/blob/master/assets/malvel'scastle.png?raw=true"),
    ]
}