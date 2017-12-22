"use strict";

function evenLast(data) {
    var long = (data.length != 0)? data.length : 0;
    var a = (long%2 === 0)? long - 1 : long;
    var i = 0;
    var b = 0;
    
    
    while(i < a+1){
        b += data[i];
        i+=2;
    }
    console.log(b*data[data.length-1]);
    var finish = (data.length !== 0)? b*data[data.length-1] : 0 ;
    return finish;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(evenLast([0, 1, 2, 3, 4, 5]), 30, "(0+2+4)*5=30");
    assert.equal(evenLast([1, 3, 5]), 30, "(1+5)*5=30");
    assert.equal(evenLast([6]), 36, "(6)*6=36");
    assert.equal(evenLast([]), 0, "An empty array = 0");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
