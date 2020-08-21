import { getArrayCopy } from '@writetome51/get-array-copy';
export function getModifiedArrayCopy(array, 
// operates on the array copy:
modifyCopy) {
    let copy = getArrayCopy(array);
    if (copy.length < 2)
        return copy;
    modifyCopy(copy);
    return copy;
}
export function alphabetizeCaseSensitive(arr, getValueToSortBy) {
    // First sort so all uppercase letters appear before any lowercase:
    arr.sort((a, b) => String(getValueToSortBy(a)) < String(getValueToSortBy(b)) ? -1 : 1);
    alphabetizeCaseInsensitive(arr, getValueToSortBy);
}
export function alphabetizeCaseInsensitive(arr, getValueToSortBy) {
    arr.sort(getCaseInsensitiveComparator(getValueToSortBy));
}
export function getCaseInsensitiveComparator(getValueToSortBy) {
    return (a, b) => {
        return (String(getValueToSortBy(a)).toLowerCase()
            < String(getValueToSortBy(b)).toLowerCase() ? -1 : 1);
    };
}
