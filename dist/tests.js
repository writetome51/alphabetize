import {getAlphabetized} from './index.js';
import {getAlphabetized_caseSensitive} from './index.js';


let strings = ['zxy', 'cop', 's', 'aAc', 'aac', '_10', 100, 'aaa', 'ATC',
	'Zebra', 'bat', '__100', 'cook', 'aab', 'Aab', 'Ã', 'ZXX', '$', 'book',
	'000', 'AE', 'qQq', ')', 'Ss', 'Atco', 'zXX', 'aTC', 2, '00',
	'1000', '30', 0, 'A', 'qqq', 'x', 'sS', 'atc', '012', 'look', 'QQQ', '0012',
	'qQQ', 'Zaa', 'qQ'];
console.time('test');
let result = getAlphabetized_caseSensitive(strings);
console.timeEnd('test');
console.log(result);


result = getAlphabetized(strings);
console.log(result);


let objects = [{name: 'hank'}, {name: 'frank'}, {name: 'harry'}, {name: 'sheena'}, {name: 'brett'}, {name: 'sam'}];
result = getAlphabetized(objects, (obj) => obj.name);
console.log(result);
