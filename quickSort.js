'use strict';

const randomPartition = require('./randomPartition');

let quickSort = {};

quickSort.findMedian = (L) => {
    quickSort.sort(L);

    let l = L.length;
    if (l % 2 !== 0){
        return L[Math.floor(l / 2)];
    }
    else {
        return (L[l / 2 - 1] + L[l / 2]) / 2;
    }
};

quickSort.sort = (L) => {
    quickSort.sort_rec(L, 0, L.length - 1);
};

quickSort.sort_rec = (L, left, right) => {
    if (left < right) {
        let r = randomPartition.partition(L, left, right);

        quickSort.sort_rec(L, left, r - 1);
        quickSort.sort_rec(L, r + 1, right);
    }
};

module.exports = quickSort;