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

    
};