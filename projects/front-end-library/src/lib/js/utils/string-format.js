export function cleanString(myString = '', stringToRemove = '') {
    return myString.replace(stringToRemove, '').trim();
}
