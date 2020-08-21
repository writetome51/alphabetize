# getAlphabetized(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr: Array&lt;T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getValueToSortBy? = (element) => element<br>): Array&lt;T&gt;
 

# getAlphabetized_caseSensitive(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr: Array&lt;T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getValueToSortBy? = (element) => element<br>): Array&lt;T&gt;

Orders uppercase letters before their lowercase versions, i.e., `['A','a','AA','aa']`

Both functions return new copy of `arr` in ascending alphabetical order.  
They sort using Array.prototype.sort() with this comparison function:  
`(a, b) => getValueToSortBy(a) < getValueToSortBy(b) ? -1 : 1`  
Optional callback `getValueToSortBy(element)` must return anything that  
can be alphabetically compared with other values. By default it simply  
returns the passed `element`. 


## Examples
```js
let objects = [{name:'frank'}, {name:'harry'}, {name:'sheena'}, {name:'brett'}, {name: 'sam'}];
result = getAlphabetized(objects, (obj) => obj.name);
/************
 Returns:
 [
    { name: 'brett' },
    { name: 'frank' },
    { name: 'harry' },
    { name: 'sam' },
    { name: 'sheena' }
]
************/
```

## Installation
`npm i  @writetome51/get-alphabetized`

## Loading
```js
import {getAlphabetized} from '@writetome51/get-alphabetized';
```
