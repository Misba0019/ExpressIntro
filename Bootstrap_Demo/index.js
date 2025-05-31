// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Import the path module
const path = require('path');

// Required Query data JSON file
const queryData = require('./data.json');

//-----------------------------------------------------------------------
// Making an absolute path for 'public' 
app.use(express.static(path.join(__dirname, 'public')))


// Set the view engine to ejs
app.set('view engine', 'ejs');
// Set the views directory using the path module
app.set('views', path.join(__dirname, '/views'));

//-----------------------------------------------------------------------

// Get Route for Home Page
app.get('/', (req, res) => {
    res.render('home', {title: 'Home'});
});

// Get Route for Bunny Page
app.get('/bunny', (req, res) => {
    res.send('Hello! I am the Bunny Page!');
});

// Get Route for Query Data
app.get('/q/:query', (req, res) => {
    const { query } = req.params;
    const data = queryData[query];
    if (data) {
        res.render('query', { ...data });
    } else {
        res.render('notFound', { query });
    }
});

// Get Route for Random Number Generator
app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 15) + 1;
    res.render('random', { randomNum: num, title: 'Random Number Generator' });
});

// Get Route for Puppies Page
app.get('/puppies', (req, res) => {
    const pupNames = [
        'Hazel', 'Joy', 'Flash', 'Julie', 'Sheero'
    ]
    res.render('puppies', { pups: pupNames, title: 'Puppies' });
});

//-----------------------------------------------------------------------

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log("Listening on Port 3000");
});

