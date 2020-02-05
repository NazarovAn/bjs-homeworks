function getAnimalSound(animal) {
    if(animal === undefined){
        return null
    }
    
    return animal.sound;
}

function getAverageMark(marks) {
    let marksSum = 0;
        
    for (let i = 0; i < marks.length; i++) {
        marksSum += parseInt(marks[i]);
    }

    return Math.round(marksSum / marks.length);
}

function checkBirthday(birthday) {
    let now = Date.now();

    birthday = Date.parse(birthday);

    let diff = now - birthday,
        age = diff / (365.25 * 24 * 60 * 60 *1000);

    return age > 18
}