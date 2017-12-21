"use strict";

function betweenMarkers(text, begin, end) {
    // returns substring between two given markers
    console.log(text);
    
    if(text.indexOf(begin) === -1 && text.indexOf(end) !== -1){
        return text.substring(0, text.indexOf(end));
    }else if(text.indexOf(begin) !== -1 && text.indexOf(end) === -1){
        return text.substring(text.indexOf(begin)+begin.length, text.length);
    }else if(text.indexOf(begin) === -1 && text.indexOf(end) === -1){
        return text;
    }
    else if(text.indexOf(begin)> text.indexOf(end)){
        return '';
    }
    else{
        return text.substring(text.indexOf(begin)+begin.length, text.indexOf(end));
    }
    // your code here
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    

    assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
    assert.equal(betweenMarkers("<head><title>My new site</title></head>",
                                "<title>", "</title>"), 'My new site')
    assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
    assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
    assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
    assert.equal(betweenMarkers('No <hi>', '>', '<'), '')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
