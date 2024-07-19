function analyzeArray(array) {
    let length = array.length;
    let sum = array.reduce((total, value) => total + value);
    let avarage = sum / length;

    return {
        avarage: Math.round(avarage),
        min: Math.min(...array),
        max: Math.max(...array),
        length: length,
    };
}

module.exports = analyzeArray;
