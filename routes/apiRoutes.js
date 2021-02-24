const store = require('../db/store.js');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    store.getNotes()
    .then((data) => {
        return res.json(data);
    })
    .catch((err) => res.status(500).json(err))
});

router.post('/notes', (req, res) => {
    store.addNotes(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err))
});

module.exports = router;