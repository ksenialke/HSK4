// These two allow you to use express
const express = require('express');
const app = express();
// The built-in path module provides utilities for working with file and directory paths
const path = require('path');
// To use HTTP and client
const http = require('http');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use('/css', express.static('css'));

const words =43;

// Returns unknown words
function getUnknown(words){
    return 1200-(words);
}

//Returns the percentage
function percentage(words){
    return ((words/1200) * 100).toFixed(2);
}

function getWords(){
    return Number(fs.readFileSync('wordz.txt', 'utf-8'));
};


app.get('/', (req, res) => {
    var known = getWords();
    res.render('index', {
        percentage: percentage(known) + "%",
        known_words: known,
        words_left: getUnknown(known)
    });
});

app.post('/', (req, res) => {
    var known = getWords();
    known++;
    fs.writeFileSync('wordz.txt', known);
    res.redirect('/');
});




// Creating the server where browsers can connect
app.listen(8000, () => {
    console.log('App is starting at port', 8000)
});
