"use strict";
function solveEquation(a, b, c) {
    let arr = [];
    let dis = Math.pow(b, 2) - 4 * a * c;
    if (dis > 0) {
        let x = (-b + Math.sqrt(dis)) / (2 * a);
        let y = (-b - Math.sqrt(dis)) / (2 * a);
        arr.push(x, y);
        return arr;
    } else if (dis === 0) {
        let x = -b / (2 * a);
        arr.push(x);
        return arr;
    } else {
        return arr;
    }
}
