import {alphabetize, alphabetizeInsensitive} from './index.js';
import {getArrayCopy} from '@writetome51/get-array-copy';
import {getArrayFromProperty} from '@writetome51/get-array-from-property';
import {arraysMatch} from '@writetome51/arrays-match';


let strings = ['z', 'Z', 'zz', 'ZZ', 'a', 'A', 'aa', 'AA', 'c', 'C', '013',
	'000', 0, '012', 1, 10, 11, '011', '001'];
let copy = getArrayCopy(strings);

alphabetize(copy);
if (arraysMatch(copy, [
	0, '000', '001', '011', '012', '013', 1, 10, 11,
	'A', 'a', 'AA', 'aa', 'C', 'c', 'Z', 'z', 'ZZ', 'zz'
])) console.log('test 1 passed');
else console.log('test 1 FAILED');

alphabetizeInsensitive(strings);
if (arraysMatch(strings, [
	0, '000', '001', '011', '012', '013', 1, 10, 11,
	'a', 'A', 'aa', 'AA', 'c', 'C', 'z', 'Z', 'zz', 'ZZ',
])) console.log('test 2 passed');
else console.log('test 2 FAILED');


let objects = [{name: 'hank'}, {name: 'frank'}, {name: 'harry'}, {name: 'sheena'},
	{name: 'brett'}, {name: 'sam'}];
alphabetize(objects, (obj) => obj.name);
let results = getArrayFromProperty('name', objects);
if (arraysMatch(results, ['brett', 'frank', 'hank', 'harry', 'sam', 'sheena']))
	console.log('test 3 passed');
else console.log('test 3 FAILED');


// If arr is empty it doesn't need to error:
let errTriggered = false;
try {
	alphabetize([]);
} catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 4 FAILED');
else console.log('test 4 passed');


// It should error if arg is not array
errTriggered = false;
try {
	alphabetize('');
} catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');
