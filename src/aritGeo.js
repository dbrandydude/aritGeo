'use strict';

/**
 * aritGeo function
 * @param  {array}          {int}
 * @return {int || sting}  {'Arithmetic' || 'Geometric' || 0 || -1}
 *
 */
const aritGeo = (list) => {
    if (!Array.isArray(list)) return 'Argument must be an array';
    if (list.length === 0) return 0;

    let result; // result for checks

    let aritConst = list[1] - list[0]; // arithmetic ratio
    let geoConst = list[1] / list[0]; // geometric ratio

    // Loop through list and perform checks
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i] + aritConst === list[i + 1]) { // check for arithmetic
            result = 'Arithmetic';
        } else if (list[i] * geoConst === list[i + 1]) { // check for geometric
            result = 'Geometric';
        } else result = -1; // check for neither arithmetic/geometric
    }
    // return result
    return result;
};

module.exports = aritGeo;
