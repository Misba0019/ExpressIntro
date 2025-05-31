// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Import the path module
const path = require('path');

// Required Query data JSON file
const queryData = require('./data.json');

//-----------------------------------------------------------------------


app.use(express.static(path.join(__dirname, 'public')));
// This is taking whatever the absolute path is to the index.js file
// Then adding on public.

//-----------------------------------------------------------------------

// Set the view engine to ejs
app.set('view engine', 'ejs');
// Set the views directory using the path module
app.set('views', path.join(__dirname, '/views'));

//-----------------------------------------------------------------------

// Define a route for the home page
app.get('/', (req, res) => {
    res.render('Home'); // Render the 'home' view template
});

// Define a route for the bunny page
app.get('/bunny', (req, res) => {
    res.send('Hello! I am the Bunny Page!'); // Send a response for the bunny page
});

// Define a GET route for the path '/q/:query'
app.get('/q/:query', (req, res) => {
    // Extract the 'query' parameter from the URL
    const { query } = req.params;
    // Access the data from 'redditData' object using the 'query' parameter as the key
    const data = queryData[query];
    if(data) {
        res.render('query', { ...data }); // If we found the data, Render the 'query' template, passing all properties of 'data' to it (with Spread Operator)
    } else {
        res.render('notFound', { query }); // If data is not found, render the 'notFound' template, passing the 'query' parameter to display a not found message.
    }
});

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 15) + 1; // Generate our number first, save that to a var.
    res.render('random', {randomNum: num}) // And then we can pass that through when I render my template. 
    // The second argument will be an object, key-value pairs. 
    // Here, whatever num is will be available in my template, under the name, randomNum.
})

app.get('/puppies', (req, res) => {
    const pupNames = [
        'Hazel', 'Joy', 'Flash', 'Julie', 'Sheero'
    ]
    res.render('puppies', { pups: pupNames } )
})

//-----------------------------------------------------------------------

// Start the server and listen on port 8080
app.listen(8080, () => {
    console.log("Listening on Port 8080"); // Log a message to the console
});

// We're using some view engine, Express is going to assume that our views template exist in a directory called, ' views '
