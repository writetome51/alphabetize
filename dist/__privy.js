// Repeated tests show Array.sort((a, b) => a < b ? -1 : 1) is faster than quicksort algorithms for
// alphabetical sorting.
export function getCaseInsensitiveComparator(getValueToSortBy) {
    return getComparator((a, b) => String(getValueToSortBy(a)).toLowerCase() < String(getValueToSortBy(b)).toLowerCase());
}
export function getCaseSensitiveComparator(getValueToSortBy) {
    return getComparator((a, b) => String(getValueToSortBy(a)) < String(getValueToSortBy(b)));
}
export function getComparator(getBoolExpression) {
    return (a, b) => (getBoolExpression(a, b) ? -1 : 1);
}
