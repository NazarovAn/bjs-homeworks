"use strict";

//Задание 1

function getSolutions(a, b, c) {
    let D = b ** 2 - 4 * a * c;

    if(D < 0){
        return {D: D};
    } else if(D === 0){
        let x1 = -b / (2 * a);
        return {roots: x1, D: D};
    } else if(D > 0){
        let x1 = (-b + Math.sqrt(D)) / (2 * a),
            x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {roots: {x1: x1, x2: x2}, D: D};
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if(result.D < 0){
        console.log(`Уравнение не имеет вещественных корней`);
    } else if(result.D === 0){
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else if(result.D > 0){
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots.x1}, X₂ = ${result.roots.x2}`);
    }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

//Задание 2 (Первая попытка (Работает))

// function getAverageScore(data) {
//     let averageScoreSum = 0;

//     for(let key in data){

//         let marksSum = 0,
//             marksAverage = 0;

//         for(let i = 0; i < data[key].length; i++){
//             marksSum += data[key][i];
//             marksAverage = marksSum / data[key].length;
//         }

//         averageScoreSum += marksAverage;

//         console.log(`${key}: ${marksAverage}`);
//     }

//     console.log("average: " + averageScoreSum / Object.keys(data).length);
// }

//Задание 2 (Вторая попытка)

function getAverageScore(data) {
    let averageSum = 0,
        average = 0;

    for(let key in data) {        
        console.log(`${key}: ${countAvrgArr(data[key])}`);

        averageSum += countAvrgArr(data[key]);
        average = averageSum / Object.keys(data).length;
    }
    
    console.log(`average: ${average}`);
}

function countAvrgArr(array) {
    let arrSum = 0,
        arrSumAvrg = 0;

    for(let i = 0; i < array.length; i++){
        arrSum += array[i];
    }

    arrSumAvrg = arrSum / array.length;

    return arrSumAvrg   
}

getAverageScore(
                {algebra: [2, 4, 5, 2, 3, 4],
                geometry: [2, 4, 5],
                russian: [3, 3, 4, 5],
                physics: [5, 5],
                music: [2, 2, 6],
                english: [4, 4, 3],
                poetry: [5, 3, 4],
                chemistry: [2],
                french: [4, 4]}
                )

//Задание 3 (Вариант 1 (Тоже работает))

// function getPersonData(secretData) {
//     let firstName = secretData.aaa,
//         lastName = secretData.bbb,
//         personName = {};

//     if(firstName === 0) {
//         personName.firstName = 'Родриго';            
//     } else if(firstName === 1){
//         else if(firstName === 1){
//     }

        
//     if(lastName === 0) {
//         personName.lastName = 'Родриго';            
//     } else if(lastName === 1) {
//         personName.lastName = 'Эмильо';
//     }

//     console.log(personName);
// }

//Задание 3 (Вариант 2)

function getPersonData(secretData) {
    return {firstName: getName(secretData.aaa), lastName: getName(secretData.bbb)}
}

function getName(number) {
    if(number === 0){
        return 'Родриго';
    } else if(number === 1) {
        return 'Эмильо';
    }
}

console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 1}));