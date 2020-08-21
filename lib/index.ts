import { alphabetizeCaseInsensitive, alphabetizeCaseSensitive, getModifiedArrayCopy } from './__privy';

// Repeated tests show Array.sort((a, b) => a < b ? -1 : 1) is faster than quicksort for 
// alphabetical sorting.

export function getAlphabetized(
	array: any[],
	getValueToSortBy = (element) => element
): any[] {
	return getModifiedArrayCopy(array, (copy) => alphabetizeCaseInsensitive(copy, getValueToSortBy));
}


// Uppercase letters are ordered before their lowercase versions, i.e., ['A','a','AA','aa']

export function getAlphabetized_caseSensitive(
	array: any[],
	getValueToSortBy = (element) => element
): any[] {
	return getModifiedArrayCopy(array, (copy) => alphabetizeCaseSensitive(copy, getValueToSortBy));
}
