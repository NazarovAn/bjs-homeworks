'use strict'

class Weapon {
    constructor(name, attack, durability, range){
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.fullDurability = durability;
    }

    

    takeDamage(damage) {
        this.durability = this.durability - damage;

        if(this.durability > 0) {
            return this.durability;
        } else if(this.durability <= 0){
            return this.durability = 0;
        }
    }

    getDamage() {
        if(this.durability > this.fullDurability * 0.3){
            return this.attack;
        } else if(this.durability <= 0){
            return this.attack = 0;
        } else if(this.durability < this.fullDurability * 0.3){
            return this.attack / 2;        
        }
    }
    

    
}



const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);