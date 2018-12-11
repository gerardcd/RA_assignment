'use strict';

const fs = require('fs');

const quickSelect = require('./quickSelect');
const quickSort = require('./quickSort');
const RMedian = require('./RMedian');
const utils = require('./utils');

const AVG_INSTANCES = 5; //20
const MAX_INSTANCE_SIZE_K = 50; //1000
const INSTANCE_SIZE_STEP = 1; //20

let generateInstances = (arrayGenerator) => {
    let instances = {};
    for (let size=INSTANCE_SIZE_STEP; size<MAX_INSTANCE_SIZE_K; size += INSTANCE_SIZE_STEP) {
        instances[size] = [];
        for (let i = 0; i < AVG_INSTANCES; i++) {
            let L = arrayGenerator(size * (10 ** 3), 5);
            instances[size].push(L);
        }
    }

    return instances;
};

let run = (algorithm, instances, fileName) => {
    let times = {};
    let results = [];

    for (let size=INSTANCE_SIZE_STEP; size<MAX_INSTANCE_SIZE_K; size += INSTANCE_SIZE_STEP){
        times[size] = 0;

        for (let i=0; i<AVG_INSTANCES; i++){
            let L = instances[size][i];
            let clone = L.slice(0);
            let r = utils.run(() => algorithm.findMedian(clone));

            results.push(r.result);
            times[size] += r.time;
        }

        times[size] /= AVG_INSTANCES;

        console.log(fileName + ': ' + ((size / MAX_INSTANCE_SIZE_K) * 100) + '%');
    }

    let csv = 'Size, Time';
    for (let size=INSTANCE_SIZE_STEP; size<MAX_INSTANCE_SIZE_K; size += INSTANCE_SIZE_STEP){
        csv += '\n ' + size + ', ' + times[size];
    }

    fs.writeFileSync(fileName + '.csv', csv);

    return results;
};

let sortedInstances = generateInstances(utils.sortedArray);
let reversedInstances = generateInstances(utils.reversedArray);
let randomSetInstances = generateInstances(utils.randomSet);

//clone instances before running algorithms
let qSelectRandom = run(quickSelect, randomSetInstances, 'quickSelect_random');
let qSortRandom = run(quickSort, randomSetInstances, 'quickSort_random');
let RMedianRandom =  run(RMedian, randomSetInstances, 'RMedian_random');


let qSelectSorted = run(quickSelect, sortedInstances, 'quickSelect_sorted');
let qSortSorted = run(quickSort, sortedInstances, 'quickSort_sorted');
let RMedianSorted =  run(RMedian, sortedInstances, 'RMedian_sorted');

console.log('Quick Sort and RMedian similarity: ' + (utils.arraySimilarity(qSortRandom, RMedianRandom) * 100) + '%');
console.log('Quick Sort and RMedian similarity: ' + (utils.arraySimilarity(qSortSorted, RMedianSorted) * 100) + '%');
