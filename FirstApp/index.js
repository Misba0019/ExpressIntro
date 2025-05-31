// Require Express
const express = require("express");

// Execute Express as it's a function
const app = express();

// Home route: Responds with a welcome message at the root URL
app.get('/', (req, res) => {
    res.send('Welcome to our Home Page!'); // Sending response
});

// Route Parameter: Handles dynamic route parameters
app.get('/r/:subreddit', (req, res) => {
    console.log(req.params); // Logging the dynamic route parameter
    res.send('This is a route parameter!'); // Responding with a message
});

// Dynamic Subroute: Handles dynamic subroutes
app.get('/q/:subroute', (req, res) => {
    const {subroute} = req.params; // Destructuring the subroute parameter from request params
    res.send(`<h1>Browsing the ${subroute} subroute</h1>`); // Sending dynamic response based on the subroute parameter
})

// Dynamic Subroute with Post ID: Handles dynamic subroutes and post IDs
app.get('/q/:subroute/:postId', (req, res) => {
    const { subroute, postId } = req.params; // Destructuring the subroute and postId parameters from request params
    res.send(`<h1>Viewing the Post ID: ${postId} of the ${subroute} subroute</h1>`); // Sending dynamic response based on the subroute and postId parameters
})
// The ':' colon indicates a variable, not hard coded. It simply checks for a pattern.

// Cat route: Responds with 'Meow!' when the '/cats' URL is accessed
app.get('/cats', (req, res) => {
    res.send('Meow!');
});

// Dog route: Responds with 'Woof!' when the '/dogs' URL is accessed
app.get('/dogs', (req, res) => {
    res.send('Woof!');
});

// Cat route through POST request: Handles POST requests to '/cats' URL
app.post('/cats', (req, res) => {
    res.send('POST req to /cats!');
});

// Request object has a property called, query, and in that property we'll find key value pairs made or based upon the query string.
app.get('/search', (req, res) => {
    const {q} = req.query; // Destructuring the 'q' parameter from the query string
    if(!q){
        res.send('Nothing found, if nothing searched!')
    }
    res.send(`<h2>Search results for : ${q}</h2>`);
})

// Catch-all route for undefined paths: Responds with a default message for any undefined routes
app.get('*', (req, res) => {
    res.send(`Error 404: Page Not Found!`);
});

// Start the server and listen on port 3000: Runs the server on port 3000
app.listen(3000, () => {
    console.log("FirstApp is Listening on Port 3000!");
});

// --Route parameter
// Example: localhost:3000/r/doggie, localhost:3000/r/kitty, etc; it will send the response "This is a route parameter!"
// 'route parameter' dynamically handles different community names under the ' /r/ ' path.
// req.params contains key-value pairs from the path string.

// Middleware to handle all incoming requests
// This should be used carefully to not override specific routes
/*app.use((req, res) => {
    console.log("We got a NEW REQUEST");
    res.send('<h1>This is my webpage!</h1>');
    // res.send({color: 'red'});
});*/
