exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let arr = array.sort((a, b) => a - b);
        return arr[0];
    }
}

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let arr = array.sort((a, b) => b - a);
        return arr[0];
    }
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let arr = array.reduce((a, b) => a + b);
        return (arr / array.length);
    }
}
