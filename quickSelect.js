'use strict';

const randomPartition = require('./randomPartition');

let quickSelect = {};

quickSelect.findMedian = (L) => {
	let l = L.length;
	if (l % 2 !== 0){
		return quickSelect.select(L, Math.floor(l / 2));
	}
	else {
		let m1 = quickSelect.select(L, l / 2 - 1);
		let m2 = quickSelect.select(L, l / 2);

		return (m1 + m2) / 2;
	}
};

quickSelect.select = (L, k) => {
	return quickSelect.select_rec(L, 0, L.length - 1, k);
};

quickSelect.select_rec = (L, left, right, k) => {
	if (right <= left){
		return L[left];
	}

	let pivotIndex = randomPartition.partition(L, left, right);

	if (k === pivotIndex) {
		return L[k];
	}

	if (k < pivotIndex) {
		return quickSelect.select_rec(L, left, pivotIndex - 1, k);
	}

	if (k > pivotIndex) {
		return quickSelect.select_rec(L, pivotIndex + 1, right, k)
	}
};

module.exports = quickSelect;