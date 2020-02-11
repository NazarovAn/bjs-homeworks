'use strict';

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // sleep(500);
    // console.log(`Вычислено`);
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2){    
    let counter = 0;

    if(arr1.length != arr2.length){
        return false;
    }
    
    function isEven(num){
        if(num === arr2[counter]){
            counter++;
            return true;
        }

        return false;
    }

    return arr1.every(isEven);
}

const mSum = memorize(sum, 5);

function memorize(fn,limit){
    const results = [];

    return function (...args) {
        const found = results.find(arr => compareArrays(arr.args, args));
        
        if(found){
            // console.log(`Вызвано из памяти`);
            return found.result;
        }
        if(results.length > limit){
            results.shift()
        }

        let result = fn.apply(this, args);                
        results.push({args, result});

        return result;
    };
};

function testCase(testFunction, name) {
    const testArr = [
        [1,1,1],
        [2,2,2],
        [1,1,1],
        [3,3,3],
        [4,4,4],
        [2,2,2],
        [5,5,5],
        [6,6,6],
        [3,3,3],
        [7,7,7],
        [8,8,8],
        [9,9,9],
        [10,10,10],
    ];

    console.time(name);

    for(let i = 0; i < 1000000; i++){
        testFunction.apply(this,testArr);
    }

    console.timeEnd(name);
}

// i < 100      sum: 3мс      mSum: 3мс
// i < 1000     sum: 17мс     mSum: 5мс
// i < 10000    sum: 126мс    mSum: 13мс
// i < 100000   sum: 1184мс   mSum: 64мс
// i < 1000000  sum: 11541мс  mSum: 586мс