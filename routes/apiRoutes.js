const store = require('../db/store');
const path = require('path');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        store.getNotes().then(data => {
            return res.json(data);
        });
    });

    app.post('/api/notes', (req, res) => {
        const newNote = req.body;

        store.addNotes(newNote).then(data => res.json(data));
    });
};