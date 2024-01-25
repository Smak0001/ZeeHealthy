import { test, expect } from 'vitest';
import expandOrders from './backend/driver/code/utils/expandOrders.js';
import filterOrdersList from './backend/driver/code/utils/filterOrdersList.js';
import validateOrderID from './backend/driver/code/utils/validateOrderID.js';


test('expandOrders', () => {
	expect(expandOrders({ accepted: [], declined: [ 1 ], completed: [ 3 ] })).toEqual({
		acceptedOrders: [],
		declinedOrders: [1],
		completedOrders: [3]});
});

test('filterOrders', () => {
	expect(filterOrdersList([1,2,3], 3)).toEqual([1,2]);
	expect(filterOrdersList([1,2,3], 4)).toEqual([1,2,3]);
});

test('validateOrderID', () => {
	expect(validateOrderID([1,2,3], 3)).toEqual([1,2,3]);
	expect(validateOrderID([1,2,3], 4)).toEqual([1,2,3,4]);
});