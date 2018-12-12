'use strict';

const utils = require('./utils');

let randomPartition = {};

randomPartition.partition = (L, left, right) => {
    let pivot = L[left];
    let l = left + 1, r = right;
    while (true){
        while (l < r && L[l] <= pivot) l++;
        while (r > l && L[r] >= pivot) r--;

        if (l === r) break;

        utils.swap(L, l, r);
    }

    if (L[l] < pivot) {
        utils.swap(L, left, l);
        return l;
    }
    else {
        utils.swap(L, left, l-1);
        return l-1;
    }
};

module.exports = randomPartition;