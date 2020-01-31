"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    if(isNaN(percent) === true){
        console.log(`Параметр \"Процентная ставка" содержит неправильное значение ${percent}.`);
        percent = parseInt(percent);
    }

    if(isNaN(contribution) === true){
        console.log(`Параметр \"Начальный взнос" содержит неправильное значение ${contribution}.`);
        contribution = parseInt(contribution);
    }

    if(isNaN(amount) === true){
        console.log(`Параметр \"Общая стоимость" содержит неправильное значение ${amount}.`);
        amount = parseInt(amount);
    }
    
    let returnSum = amount - contribution;
    let monthlyPercent = percent / 100 / 12;
    date = new Date(date);

    function countMonths(date){
        let nowadays = new Date (),
            lookForDate = new Date (date),
            counter = 0;
      
        for(let i = 0; i < 10000 ; i++){
            if(nowadays.getFullYear() != lookForDate.getFullYear() || nowadays.getMonth() != lookForDate.getMonth()){
            nowadays.setMonth(nowadays.getMonth() + 1);
            counter ++;
          } else {
            return counter;
          }
        }
    }

    let monthlyPayment = returnSum * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** countMonths(date)) - 1));

    let totalAmount = monthlyPayment * countMonths(date);

    return totalAmount.toFixed(2)
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let greeting = `Привет, мир! Меня зовут ${name}.`;

    if(name === "" || name === null || name === undefined){
        return "Привет, мир! Меня зовут Аноним."
    }

    return greeting;
}