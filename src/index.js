module.exports = function check(str, bracketsConfig) {

  while (str.length > 0) {
    previousStr = str;
    str = clining(str, bracketsConfig);

    if (str === previousStr) {
        return false;
    } 
}
return true;
}

function clining(str, bracketsConfig) {
    bracketsConfig.forEach(elem => {
        part = elem.join('')
        str = str.replace(part, '')
    });
    return str;
}
