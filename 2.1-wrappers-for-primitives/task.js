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
    percent = parseInt(percent);
    contribution = parseInt(contribution);    
    amount = parseInt(amount);

    if(isNaN(percent) === true){
        return `Параметр \"${window.percent.placeholder}" содержит неправильное значение ${window.percent.value}.`;
    }

    if(isNaN(contribution) === true){
        return `Параметр \"${window.contribution.placeholder}" содержит неправильное значение ${window.contribution.value}.`;
    }

    if(isNaN(amount) === true){
        return `Параметр \"${window.amount.placeholder}" содержит неправильное значение ${window.amount.value}.`;
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
    if(name === "" || name === null || name === undefined){
        name = 'Аноним';
    }

    return `Привет, мир! Меня зовут ${name}.`
}