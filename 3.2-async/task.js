"use strict";

class AlarmClock{
    constructor () {
        this.alarmCollection = [];
        this.id;
    }

    isOn(value){
        return this.alarmCollection.some((element) => element.callId == value || element.time == value);      
    }

    addClock(time, callbackFn, callId){
        if(callId === undefined){
            return console.error(`Нет ID звонка`);
        }

        if(this.isOn(callId)){
            return console.error(`Такой будильник уже есть`);
        }

        console.log(`Будильник №${callId} на ${time} создан`);

        return this.alarmCollection.push({time, callbackFn, callId});
    }

    removeClock(callId){
        if(!this.isOn(callId)){
            return false
        }

        console.log(`Будильник №${callId} удалён`)

        this.alarmCollection = this.alarmCollection.filter((element) => element.callId != callId);
        return true;
    }

    getCurrentFormattedTime(){
        const today = new Date();
        return `${today.getHours()}:${today.getMinutes()}`
    }

    start(){
        function checkClock(time){
            const today = new Date();
            const now = `${today.getHours()}:${today.getMinutes()}`;

            if(now == time){
                return true;
            } else{
                return false;
            }
        }

        const intervalId = setInterval(() => {
            this.alarmCollection.some(element => {
                if(checkClock(element.time) === true){
                    return element.callbackFn();
                }
            });            
        }, 1000);

        return this.id = intervalId;
    }

    stop(){
        if(this.id != undefined){
            clearInterval(this.id);
        }

        console.log('Все будильники выключены');

        return this.id = undefined;
    }

    printAlarms(){
        this.alarmCollection.forEach(element => console.log(`Время будильника: ${element.time}\nНомер будильника: ${element.callId}`));

        if(this.alarmCollection === []){
            console.log('Будильников нет.')
        }
    }

    clearAlarms(){
        this.stop();

        this.alarmCollection = [];

        return setTimeout(() => {console.log(`Поставить новый будильник?`)});
    }
}

const testCase = new AlarmClock;

testCase.addClock('1:40', () =>{console.log(`Пора спать`)}, 1);
testCase.addClock('1:41', () =>{console.log(`Пора уже`); testCase.removeClock(2)}, 2);
testCase.addClock('1:41', () => console.log(`Пора`));
testCase.addClock('1:42', () =>{console.log(`Спааать!`); testCase.clearAlarms(); testCase.printAlarms()}, 3);
testCase.addClock('1:43', () =>console.log(`Sleep!`), 1);
testCase.printAlarms();
testCase.start();