'use strict';

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Date.now();

    birthday = Date.parse(birthday);

    let diff = now - birthday,
        age = diff / (365.25 * 24 * 60 * 60 *1000);

    return age > 18
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    if(animal === undefined){
        return null
    }
    
    return animal.sound;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let marksSum = 0;
        
    for (let i = 0; i < marks.length; i++) {
        marksSum += parseInt(marks[i]);
    }

    return Math.round(marksSum / marks.length);
}