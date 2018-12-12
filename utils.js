'use strict';

let utils = {};

utils.randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

utils.swap = (L, i, j) => {
    [L[i], L[j]] = [L[j], L[i]];
};

utils.randomArray = (length, digits) => {
    let L = [];
    for (let i = 0; i<length + 1; i++){
        L.push(utils.randomInt(1,10**digits));
    }
    return L;
};

utils.sortedArray = (length, digits) => {
    let L = [];
    let start = 10**(digits-1);
    let end = 10**(digits);
    let range = end - start;
    let inc = range / length;

    let last = start;
    for (let i = 0; i<length + 1; i++){
        let rInc = utils.randomInt(1, inc * 2);
        last = last + rInc;
        L.push(last);
    }
    return L;
};

utils.randomSet = (length, digits) => {
    let L = utils.sortedArray(length, digits);
    utils.randomPermutation(L);
    return L;
};

utils.randomPermutation = (L) => {
    let n = L.length;
    for (let i=0; i<n; i++){
        let index = utils.randomInt(i, n);
        utils.swap(L, i, index)
    }
};

utils.run = (f) => {
    let startTime = Date.now();
    let result = f();
    let endTime = Date.now();

    return {
        result,
        time: endTime - startTime
    }
};

utils.arraySimilarity = (L1, L2) => {
    let n = L1.length;
    let correct = 0;

    for (let i=0; i<n; i++){
        if (L1[i] === L2[i]){
            correct += 1;
        }
    }
    return correct / n;
};

module.exports = utils;