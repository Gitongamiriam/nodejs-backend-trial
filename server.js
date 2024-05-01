const express = require('express');
const app = express();
const PORT = 3002;

// Middleware to parse JSON bodies using Express built-in parser
app.use(express.json());

// GET endpoint for the root URL
app.get('/', (req, res) => {
    res.send('Hello Gitonga');
});

// POST endpoint to receive form data
app.post('/submit-form', (req, res) => {
    console.log('Received form data:', req.body);
    res.status(200).json({ message: 'Form data received successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
