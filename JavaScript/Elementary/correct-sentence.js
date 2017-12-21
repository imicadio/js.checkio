"use strict";

function correctSentence(text) {
    // returns a corrected sentence which starts with capital letter
    // and ends with dot.
    var text1 = text.charAt(0).toUpperCase() + text.slice(1);
    if(text.charAt(text.length-1) === "."){
        return text1;
    }else{
        var dot = ".";
        return text1.concat(dot);
    }
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(correctSentence("greetings, friends"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(correctSentence("greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends."), "Greetings, friends.")
    assert.equal(correctSentence("hi"), "Hi.")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
