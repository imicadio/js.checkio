"use strict";

function firstWord(a) {
    // returns the first word in a given text. 
    var dot = a.replace(/\./g, ' ');
    var comma = dot.replace(/,/g, '');
    var words = comma.split(" ");
    
    for(var i = 0; i < words.length; i++){
        if(words[i] === ""){
            continue;
        }
        else{
            return words[i];            
        }
    }
    // your code here
    
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(firstWord("Hello world"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(firstWord("Hello.World"), "Hello")
    assert.equal(firstWord(" a word "), "a")
    assert.equal(firstWord("don't touch it"), "don't")
    assert.equal(firstWord("greetings, friends"), "greetings")
    assert.equal(firstWord("... and so on ..."), "and")
    assert.equal(firstWord("hi"), "hi")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
