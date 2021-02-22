const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

//This will be the path for api routes
require('./')(app);

//this will be the path for html routes
require('./')(app);

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})
