const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

//This will be the path for api routes
// require("./routes/apiRoutes")(app);

// //this will be the path for html routes
// require("./routes/htmlRoutes")(app);

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})
