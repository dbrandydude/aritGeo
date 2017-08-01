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

    let result,
        aritConst = list[1] - list[0],
        geoConst = list[1] / list[0];

    /* loop through list and perform checks */
    for (let i = 1; i < list.length; i++) {
        if (list[0] + aritConst * i === list[i]) result = 'Arithmetic';
        else {
            for (let i = 0; i < list.length - 1; i++) {
                if (list[i] * geoConst === list[i + 1]) result = 'Geometric';
                else result = -1;
            }
        }
    }

    return result;
};

module.exports = aritGeo;
