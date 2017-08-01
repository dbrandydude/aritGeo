'use strict';
const assert = require('chai').assert;
const aritGeo = require('../src/aritGeo');

describe('aritGeo()', () => {
    it('should return `0` for invalid argument', () => {
        assert.equal(0, aritGeo(''));
    });
    it('should return `0` for an empty array', () => {
        assert.equal(0, aritGeo([]));
    });
    it('should return `Arithmetic` for arithmetic progression', () => {
        assert.equal('Arithmetic', aritGeo([2, 5, 8, 11, 14]));
    });
    it('should return `Arithmetic` for arithmetic progression', () => {
        assert.equal('Arithmetic', aritGeo([4, 8, 12, 16, 20]));
    });
    it('should return `Arithmetic` for arithmetic progression', () => {
        assert.equal('Arithmetic', aritGeo([10, 15, 20, 25, 30]));
    });
    it('should return `Arithmetic` for arithmetic progression', () => {
        assert.equal('Arithmetic', aritGeo([5, 9, 13, 17, 21]));
    });
    it('should return `Geometric` for geometric progression', () => {
        assert.equal('Geometric', aritGeo([2, 6, 18, 54]));
    });
    it('should return `Geometric` for geometric progression', () => {
        assert.equal('Geometric', aritGeo([4, 8, 16, 32, 64, 128, 256]));
    });
    it('should return `-1` for neither arithmetic or geometric', () => {
        assert.equal(-1, aritGeo([2, 5, 4, 20, 16]));
    });
    // bug test
    it('should return `-1` for neither arithmetic or geometric', () => {
        assert.equal(-1, aritGeo([2, 4, 7, 9, 11]));
    });
});
