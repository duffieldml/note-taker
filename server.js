const express = require('express');
const path = require('path');
const fs = require('fs');
// const notesSaved = require('../db/db.json');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

//This will be the path for api routes
// require("./routes/apiRoutes")(app);

// //this will be the path for html routes
// require("./routes/htmlRoutes")(app);

app.use(require('./routes/htmlRoutes.js'));
app.use(require('./routes/apiRoutes.js'));

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})
