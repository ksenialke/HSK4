// These two allow you to use express
const express = require('express');
const app = express();
// The built-in path module provides utilities for working with file and directory paths
const path = require('path');
// To use HTTP and client
const http = require('http');

app.set('view engine', 'ejs');
app.use('/css', express.static('css'));


// Returns unknown words
function getUnknown(words){
    return 1200-(words);
}

//Returns the percentage
function percentage(words){
    return ((words/1200) * 100).toFixed(2);
}

app.get('/', (req, res) => {
    // przeczytać plik i wzionc z niego words
    res.render('index', {
        percentage: percentage(words) + "%",
        known_words: words,
        words_left: getUnknown(words)
    });
});

app.post('/', (req, res) => {
    // przeczytac plik, wzionc words
    // zwiekszysc words o jeden
    // NADPISAĆ to co było w pliku
    words++;
    res.redirect('/');
});

// Creating the server where browsers can connect
app.listen(8000, () => {
    console.log('App is starting at port', 8000)
});
