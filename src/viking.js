// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health <= 0) {
        return `${this.name} has died in act of combat`
        } else return `${this.name} has received ${damage} points of damage`;
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
   // super(health, strength);
    receiveDamage(damage) {
        this.health -= damage;
        if(this.health <= 0) {
            return `A Saxon has died in combat`;
            } else return `A Saxon has received ${damage} points of damage`;
        
    }
}

// War
class War {
    constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    attack(attacker, defender) {

        const chooseAttackerIndex = Math.floor(Math.random() * attacker.length)
        const strengthAttacker = attacker[chooseAttackerIndex].strength

        const chooseDefenderIndex = Math.floor(Math.random() * defender.length)    
        
        const damagedDefender = defender[chooseDefenderIndex];
    
        let attackResult = damagedDefender.receiveDamage(strengthAttacker);

        if (damagedDefender.health <= 0) {
            defender.splice(chooseDefenderIndex, 1);
        }
        return attackResult;
    }

    vikingAttack() {
        // const chooseVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        // const strengthViking = this.vikingArmy[chooseVikingIndex].strength

        // const chooseSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)    
        
        // const damagedSaxon = this.saxonArmy[chooseSaxonIndex];   
    
        // let attackResult = this.saxonArmy[chooseSaxonIndex].receiveDamage(strengthViking);

        // if (damagedSaxon.health <= 0) {
        //     this.saxonArmy.splice(chooseSaxonIndex, 1);
        // }

        // return attackResult;
        return this.attack(this.vikingArmy, this.saxonArmy);
    }
    saxonAttack() {

        // const chooseSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)    
        // const strengthSaxon = this.saxonArmy[chooseSaxonIndex].strength
       
        // const chooseVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        
        // const damagedViking = this.vikingArmy[chooseVikingIndex];   
    
        // let attackResult = this.vikingArmy[chooseVikingIndex].receiveDamage(strengthSaxon);

        // if (damagedViking.health <= 0) {
        //     this.vikingArmy.splice(chooseVikingIndex, 1);
        // }

        // return attackResult;

        return this.attack(this.saxonArmy, this.vikingArmy);
    }
    showStatus() {
        if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
        if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day...";

        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1 ) return "Vikings and Saxons are still in the thick of battle.";

    }

}
