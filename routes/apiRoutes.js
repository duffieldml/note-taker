const fs = require('fs');
const notes = require('../db/db.json');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        return res.json(notes);
    });

    app.get('/api/notes/:id', (req, res) => {
        const id = req.params.id;
        let found;
        notes.forEach(n => {
            if (id == n.id){
                found = n;
                return res.json(n)
            };
        });
        return res.json(false);
    });

    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        if (notes.length === 0){
            newNote.id = 1;
        }else {
            newNote.id = (notes[notes.length-1].id + 1);
        }
        notes.push(newNote);
    })
};