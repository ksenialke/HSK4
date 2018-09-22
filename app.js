// These two allow you to use express
const express = require('express');
const app = express();
// The built-in path module provides utilities for working with file and directory paths
const path = require('path');
// To use HTTP and client
const http = require('http');

// Routes
// app.get(path, callback)
// The first argument (path) is anything that comes after the domain
// The second argument is  a callback function that tells the server what to do when the path is matched
// __dirname is directory that contains the JavaScript source codenpm install nodemon --save-dev

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/javascript', (req, res) => {
    res.sendFile(path.join(__dirname, '/app.js'));
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '/style.css'));
});

// Creating the server where browsers can connect
app.listen(8000, () => {
    console.log('App is starting at port', 8000)
});


let words = 36;

// Returns known words
function getWords(words) {
    return words;
};

// Returns unknown words
function getUnknown(){
    return 1200-getWords(words);
}

//Returns the percentage
function percentage(words){
    return ((words/1200) * 100).toFixed(2);
}


console.log('Known:'+getWords(words));
console.log('Unknown:'+getUnknown(getWords(words)));
console.log('Percentage: '+percentage(words)+'%')
