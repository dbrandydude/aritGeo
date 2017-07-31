'use strict';
const assert = require('chai').assert;
const aritGeo = require('../src/aritGeo');

describe('Arithmetic | Geometric', () => {
    describe('aritGeo([])', () => {
        it('should return `0` for an empty array', () => {
            assert.equal(0, aritGeo([]));
        });
    });
    describe('aritGeo([2, 5, 8, 11, 14])', () => {
        it('should return `Arithmetic` for arithmetic progression', () => {
            assert.equal('Arithmetic', aritGeo([2, 5, 8, 11, 14]));
        });
    });
    describe('aritGeo([2, 6, 18, 54])', () => {
        it('should return `Geometric` for geometric progression', () => {
            assert.equal('Geometric', aritGeo([2, 6, 18, 54]));
        });
    });
    describe('aritGeo([2, 5, 4, 20, 16])', () => {
        it('should return `-1` for neither arithmetic or geometric', () => {
            assert.equal(-1, aritGeo([2, 5, 4, 20, 16]));
        });
    });
});
