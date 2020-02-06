'use strict'

// Задание 1

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
        }        
        return this.durability = 0;
    }

    getDamage() {
        if(this.durability > this.fullDurability * 0.3 || this.durability === Infinity){
            return this.attack;
        } else if(this.durability === 0){
            return this.attack = 0;
        }        
        return this.attack / 2;
    }

    isBroken(){
        if(this.durability === 0){
            return true;
        }
        return false;
    }
}

const oldSword = new Weapon('Старый меч', 20, 10, 1);

// Задание 2

class Arm extends Weapon{
    constructor(){
        super('Рука', 1, Infinity, 1);
    }
}

class Bow extends Weapon{
    constructor(){
        super('Лук', 10, 200, 3);
    }
}

class Sword extends Weapon{
    constructor(){
        super('Меч', 25, 500, 1);
    }
}

class Knife extends Weapon{
    constructor(){
        super('Нож', 5, 300, 1);
    }
}

class Staff extends Weapon{
    constructor(){
        super('Посох', 8, 300, 2);
    }
}

class Axe extends Weapon{
    constructor(){
        super('Секира', 27, 800, 1);
    }
}

class StormStaff extends Weapon{
    constructor(){
        super('Посох Бури', 10, 300, 3);
    }
}

class LongBow extends Weapon{
    constructor(){
        super('Длинный лук', 15, 200, 4);
    }
}

const arm = new Arm();
const bow = new Bow();
const sword = new Sword();
const knife = new Knife();
const staff = new Staff();
const longBow = new LongBow();
const battleAxe = new Axe();
const stormStaff = new Weapon();

// Задание 3

class StudentLog {
    constructor(name){
        this.name = name;
        this.subjects = {};
    }

    getName(){
        return this.name;
    }

    addGrade(grade, subject){
        if(this.subjects[subject] === undefined){
            this.subjects[subject] = [];
        }

        if(grade > 5 || grade < 1 || isNaN(grade) === true){
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`)
            return this.subjects[subject].length;
        }

        this.subjects[subject].push(grade);
        
        return this.subjects[subject].length;
    }

    getAverageBySubject(subject){
        if(this.subjects[subject] === undefined){
            return 0;
        }
        
        let sum = 0;

        for(let i = 0; i < this.subjects[subject].length; i++){
            sum += this.subjects[subject][i];
        }

        return sum / this.subjects[subject].length;
    }

    getTotalAverage(){
        let totalSum = 0;

        for(let key in this.subjects){
            totalSum += this.getAverageBySubject(key);
        }

        return totalSum / Object.keys(this.subjects).length;
    }
}

const log = new StudentLog('Олег Никифоров');

// console.log(log.getName())
// console.log(log.addGrade(3, 'algebra'));
// console.log(log.addGrade('отлично!', 'math'));
// console.log(log.addGrade(4, 'algebra'));
// console.log(log.addGrade(5, 'geometry'));
// console.log(log.addGrade(25, 'geometry'));

// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');
// log.addGrade(4, 'math');

// console.log(log.getAverageBySubject('geometry'));
// console.log(log.getAverageBySubject('algebra'));
// console.log(log.getAverageBySubject('math'));
// console.log(log.getTotalAverage());
