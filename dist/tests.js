import {getAlphabetized} from './index.js';
import {getAlphabetized_caseSensitive} from './index.js';


let strings = ['zxx', 'aAc', 'aac', 'aaa', 'ATC', 'bat', 'aab', 'bAt',
	'Aab', 'ZXX', 'Bat', 'At', 'zXX', 'aTC', 'za', 'ZA', 'qqq',
	'atc', 'QQQ', 'qQQ', 'Zaa'];
console.time('test');
let result = getAlphabetized_caseSensitive(strings);
console.timeEnd('test');
console.log(result);


result = getAlphabetized(strings);
console.log(result);


let objects = [{name: 'hank'}, {name: 'frank'}, {name: 'harry'}, {name: 'sheena'},
	{name: 'brett'}, {name: 'sam'}];
result = getAlphabetized(objects, (obj) => obj.name);
console.log(result);
