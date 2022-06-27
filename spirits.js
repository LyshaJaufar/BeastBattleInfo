export default class Spirits {
    constructor(spirits = initialise()) {
        this.spirits = spirits
    }
}

class Spirit {
    constructor(name, description, image) {
        this.name = name
        this.description = description
        this.image = image
    }
}

function initialise() {
    return [
        new Spirit("Jent", 
        "Opponent draws accessories and discards all without using any for one round.",
        "https://github.com/LyshaJaufar/BeastBattleInfo/blob/master/assets/jent.png?raw=true"),
        new Spirit("Marco", 
        "Opponent chooses an elemental from your pool. If none, you may search your deck for one.",
        "https://github.com/LyshaJaufar/BeastBattleInfo/blob/master/assets/marco.png?raw=true"),
        new Spirit("Tom", 
        "All place cards of the opponent are turned against them, decrementing the value of the particular beast(s) instead for one round.",
        "https://github.com/LyshaJaufar/BeastBattleInfo/blob/master/assets/tom.png?raw=true"),
        new Spirit("Igor", 
        "Sacrifice your best beast in hand to the opponent and draw a beast. Opponent cannot use the beast in the current round.",
        "https://github.com/LyshaJaufar/BeastBattleInfo/blob/master/assets/igor.png?raw=true"),
        new Spirit("Ellena", 
        "After drawstep, reveal the top 8 cards of your library. Opponent may choose any four of them and put any two in their hand and the rest in their library.",
        "https://github.com/LyshaJaufar/BeastBattleInfo/blob/master/assets/elenna.png?raw=true"),
    ]
}