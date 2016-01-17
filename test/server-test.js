"use strict";
var assert = require('chai').assert,
    isEq = assert.strictEqual,
    ts = require('../src/timestamps.js')
;


describe('timestamps', () => {
    it('isTimestamp: detects valid timestamps', ()=>{
        assert.isTrue(ts.isTimestamp('0'));
        assert.isTrue(ts.isTimestamp('1234'));
    });
    it('isTimestamp: detects invalid timestamps', ()=>{
        assert.isFalse(ts.isTimestamp('-1'));
        assert.isFalse(ts.isTimestamp('December 01, 2015'));
    });


    it('parseValue: can parse timestamp value and return a Date object', ()=>{
        assert.instanceOf(ts.parseValue(0), Date);
        assert.instanceOf(ts.parseValue(32132132222219), Date);
    });
    it('parseValue: can parse human readable and return a Date object', ()=>{
        isEq(0, ts.parseValue('December 31, 1969 19:00').getTime());
    });


    it('dateToNatural: prints full month', ()=>{
        let date = 'December 15, 2014';
        isEq(date, ts.dateToNatural(new Date(date)));
    });
    it('dateToNatural: prints padded day', ()=>{
        let date = 'December 07, 2014';
        isEq(date, ts.dateToNatural(new Date(date)));
    });


    it('dateToUnixTs: converts date to seconds not milliseconds', ()=>{
        isEq(1450137600, ts.dateToUnixTs(new Date('December 15, 2015')));
    });


    it('response: can format response from a date object', ()=>{
        var expected = { "unix": 1450137600, "natural": "December 15, 2015" };
        assert.deepEqual(expected, ts.response(new Date('December 15, 2015')));
    });
});
