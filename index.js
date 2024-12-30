const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(__dirname));

// Serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Handle form data (POST request)
app.post("/submit-data", (req, res) => {
    const { name, age } = req.body;
    console.log(`Received data: Name - ${name}, Age - ${age}`);
    res.send(`<h1>Data Submitted Successfully!</h1><p>Name: ${name}, Age: ${age}</p>`);
});

// Listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});