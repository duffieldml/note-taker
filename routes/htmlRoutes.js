const path = require('path');

module.exports = (app) => {
    app.get('/notes', (req, res) => {
        res.sendfile(path.join(__dirname, "../public/notes.html"));
    });

};