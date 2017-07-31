'use strict';

/**
 * aritGeo function
 *
 * @param  {array}          {int}
 * @return {int || sting}  {'Arithmetic' || 'Geometric' || 0 || -1}
 */
const aritGeo = (list) => {
    // verify that list is an array or not empty
    if (!Array.isArray(list) || list.length === 0) return 0;

    let result, // result for checks
        aritConst = list[1] - list[0], // arithmetic common ratio
        geoConst = list[1] / list[0]; // geometric common ratio

    /* Loop through list and perform check for arithmetic progression */
    for (let i = 1; i < list.length; i++) {
        if (list[0] + aritConst * i === list[i]) result = 'Arithmetic';
        else { // if arithmetic fails, check for geometric
            for (let i = 0; i < list.length - 1; i++) {
                if (list[i] * geoConst === list[i + 1]) result = 'Geometric';
                else result = -1; // if both fails
            }
        }
    }

    return result;
};

module.exports = aritGeo;
