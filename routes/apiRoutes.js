const express = require('express');
app = express();
const router = require('express').Router();
const uuid = require('uuid');
const fs = require('fs');
const notesSaved = require('../db/db.json');

app.use(express.json());

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public','notes.html'))
    .catch((err) => res.status(500).json(err))
});

router.get('/api/notes', (req, res) => {
    res.send(notesSaved);
});

router.post('/api/notes', (req, res) => {
    const newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text,
    }
    notesSaved.push(newNote);
    const note = JSON.stringify(notesSaved, null, 2)
    fs.writeFileSync('./db/db.json', note,()=>{console.log('added')});
    res.send(notesSaved)
});

module.exports = router;