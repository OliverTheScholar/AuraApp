const path = require('path');
const express = require('express');

const app = express();

// const apiRouter = require('./routes/api');

const PORT: number = 3000;

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.status(200).send('Server is running!!');
})

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;