"use strict";

const TZ_DELTA = new Date().getTimezoneOffset() * 60 * 1000;

var a = 1,
    isValidDate = function (d) {
    return !isNaN(d.getTime());
},
    response = function (date) {
    return isValidDate(date) ? { unix: dateToUnixTs(date), natural: dateToNatural(date) } : { unix: null, natural: null };
},
    isTimestamp = function (v) {
    return (/^\d+$/.test(v)
    );
},
    parseValue = function (value) {
    if (isTimestamp(value)) {
        return new Date(value * 1000 + TZ_DELTA);
    } else {
        return new Date(value);
    }
},
    padDay = function (n) {
    return ('0' + n.toString()).slice(-2);
},
    monthString = function (n) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[n];
},
    dateToNatural = function (d) {
    return monthString(d.getMonth()) + ' ' + padDay(d.getDate()) + ', ' + d.getFullYear();
},
    dateToUnixTs = function (d) {
    let ts = (d.getTime() - TZ_DELTA) / 1000;

    if (ts < 1) ts = 0;

    return ts;
};

module.exports = {
    response: response,
    isTimestamp: isTimestamp,
    parseValue: parseValue,
    dateToNatural: dateToNatural,
    dateToUnixTs: dateToUnixTs
};