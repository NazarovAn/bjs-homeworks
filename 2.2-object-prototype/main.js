function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Date.now();

    birthday = Date.parse(birthday);

    let diff = now - birthday,
        age = diff / ((365 * 24 * 60 * 60 *1000 * 14 + 366 * 24 * 60 * 60 * 1000 * 4) / 18);

    if(age > 18){
        return true;
    } else {
        return false;
    }
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = {};

    if(animal === undefined){
        return null
    } else {
       sound = animal.sound;
    }

    return sound;
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
        roundedAverage = 0;
        
    for (let i = 0; i < marks.length; i++) {

        marksSum += Number(marks[i]);
    }

    roundedAverage = Math.round(marksSum / marks.length);

    return roundedAverage;
}