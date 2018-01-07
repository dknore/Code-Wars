function cubeOdd(arr) {
    if (arr.every(x => typeof (x) === 'number') !== true) return undefined;

    var cube = arr.map(x => Math.pow(x, 3)).filter(x => (x % 2));
    return cube.reduce(function (acc, cur) {
        return acc + cur;
    }, 0);
}