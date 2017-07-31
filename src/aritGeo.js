'use strict';

const aritGeo = (list) => {
    if (!Array.isArray(list)) return 'Argument must be an array';
    if (list.length === 0) return 0;

    let result;

    let aritConst = list[1] - list[0];
    let geoConst = list[1] / list[0];

    for (let i = 0; i < list.length - 1; i++) {
        if (list[i] + aritConst === list[i + 1]) {
            result = 'Arithmetic';
        } else if (list[i] * geoConst === list[i + 1]) {
            result = 'Geometric';
        } else result = -1;
    }

    return result;
};

module.exports = aritGeo;
