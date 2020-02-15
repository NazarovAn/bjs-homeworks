"use strict";

class AlarmClock{
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }

    isOn(value){
        return this.alarmCollection.some((element) => element.callId == value || element.time == value);      
    }

    addClock(time, callbackFn, callId){
        if(callId === undefined){
            console.error(`Нет ID звонка`);
            return;
        }

        if(this.isOn(callId)){
            console.error(`Такой будильник уже есть`);
            return;
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
        let minute = today.getMinutes(),
            hour = today.getHours();

        if(minute < 10){
            minute = `0` + minute;
        }

        if(hour < 10){
            hour = `0` + hour;
        }

        return `${hour}:${minute}`
    }

    start(){
        function checkClock(time, now){
            return now == time
        }

        const intervalId = setInterval(() => {
            this.alarmCollection.forEach(element => {
                if(checkClock(element.time, this.getCurrentFormattedTime()) === true){
                    return element.callbackFn();
                }
            });            
        }, 1000);

        return this.timerId = intervalId;
    }

    stop(){
        if(this.timerId != null){
            clearInterval(this.timerId);
        }

        console.log('Все будильники выключены');

        return this.timerId = null;
    }

    printAlarms(){
        this.alarmCollection.forEach(element => console.log(`Время будильника: ${element.time}\nНомер будильника: ${element.callId}`));

        if(this.alarmCollection.length === 0){
            console.log('Будильников нет.')
        }

        return;
    }

    clearAlarms(){
        this.stop();

        this.alarmCollection = [];

        return;
    }
}

const testCase = new AlarmClock;

testCase.addClock('00:33', () =>{console.log(`Пора спать`)}, 1);
testCase.addClock('00:34', () =>{console.log(`Пора уже`); testCase.removeClock(2)}, 2);
testCase.addClock('00:34', () => console.log(`Пора`));
testCase.addClock('00:35', () =>{console.log(`Спааать!`); testCase.clearAlarms(); testCase.printAlarms()}, 3);
testCase.addClock('00:36', () =>console.log(`Sleep!`), 1);
testCase.printAlarms();
testCase.start();