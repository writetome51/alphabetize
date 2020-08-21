import { getArrayCopy } from '@writetome51/get-array-copy';

// Repeated tests show Array.sort((a, b) => a < b ? -1 : 1) is faster than quicksort for 
// alphabetical sorting.

export function getAlphabetized(
	array: any[],
	getValueToSortBy = (element) => element
): any[] {
	let arr = getArrayCopy(array);
	if (arr.length < 2) return arr;

	// '<' operator compares the strings' unicode values.
	arr.sort((a, b) => getValueToSortBy(a) < getValueToSortBy(b) ? -1 : 1);
	return arr;
}
