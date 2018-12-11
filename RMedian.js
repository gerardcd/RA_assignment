'use strict';

const utils = require('./utils');
const quickSort = require('./quickSort');

let RMedian = {};

RMedian.findMedian = (S) => {
    let n = S.length;

    let R = RMedian.selectR(S);
    quickSort.sort(R);

    let nR = R.length;
    let dIndex = Math.floor(nR/2 - Math.sqrt(n));
    let uIndex = Math.floor(nR/2 + Math.sqrt(n));

    let d = R[dIndex];
    let u = R[uIndex];

    let C = S.filter((x) => d <= x && x <= u);
    let ld = S.filter((x) => x < d).length;
    let lu = S.filter((x) => u > x).length;

    if (ld > n/2 || lu < n/2 || C.length > 4*nR) {
        return false;
    }

    quickSort.sort(C);
    let mIndex = Math.floor(n/2) - ld;
    return C[mIndex];

};

RMedian.selectR = (L) => {
    let R = [];
    let nR = Math.ceil(L.length ** (3/4));

    for (let i=0; i<nR; i++){
        let index = utils.randomInt(0, L.length);
        R.push(L[index]);
    }

    return R;
};

module.exports = RMedian;