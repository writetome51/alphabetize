import { getCaseInsensitiveComparator, getCaseSensitiveComparator } from './__privy';


// Uppercase letters are ordered before their lowercase versions, i.e., ['A','a','AA','aa']

export function alphabetize(arr, getValueToSortBy = (element) => element): void {
	// First sort so all uppercase letters appear before any lowercase:
	arr.sort(getCaseSensitiveComparator(getValueToSortBy));

	alphabetizeInsensitive(arr, getValueToSortBy);
}


export function alphabetizeInsensitive(arr, getValueToSortBy = (element) => element): void {
	arr.sort(getCaseInsensitiveComparator(getValueToSortBy));
}
