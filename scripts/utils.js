const fs = require('fs');

const renameFiles = (path, oldString, newString) => {
    const files = fs.readdirSync(path)
    for (const file of files) {
        fs.rename(
            path + '/' + file,
            path + '/' + file.replace(oldString, newString),
            error => {
                // return console.error('Error occurred:', error);
            }
        )
    }
}
exports.renameFiles = renameFiles;


const toCamelCase = (str) => {
    const strCamelCase = str.toLowerCase().replace(/(?:(^.)|(\s+|-+.))/g, function(match) {
        return match.charAt(match.length-1).toUpperCase();
    });
    return lowerCaseFirstLetter(strCamelCase);
}
exports.toCamelCase = toCamelCase;


const hasUpperCase = (str) => {
    return (/[A-Z]/.test(str));
}
exports.hasUpperCase = hasUpperCase;


const hasSpace = (str) => {
    return (/\s/.test(str));
}
exports.hasSpace = hasSpace;


const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalize = capitalize;


const toReadableFormat = (strCamelCase) => {
    return strCamelCase.replace(/([A-Z])/g, ' $1').trim();
}
exports.toReadableFormat = toReadableFormat;


const lowerCaseFirstLetter = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
exports.lowerCaseFirstLetter = lowerCaseFirstLetter;
