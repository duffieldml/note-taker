const util = require('util');
const fs = require('fs');
var uniqid = require('uniqid');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {

    readNotes() {
        return readFileAsync('./db/db.json', 'utf8');
    };

    writeNotes(note) {
        return writeFileAsync('./db/db.json', JSON.stringify(note));
    }

    getNotes() {
        return this.readNotes().then(notes => {
            let notesNew;

            try {
                notesNew = [].concat(JSON.parse(notes))
            } catch(err){
                notesNew = [];
            };
            return notesNew
        });
    };

    addNotes(note) {
        const { title, text} = note
        if(!title || !text){
            throw new Error('You must fill in the required information!');
        } 
        const finalNote = {title, text, id:uniqid() }
        return this.getNotes()
        .then(notes => [...notes, finalNote]).then(updateNotes => this.writeNotes(updateNotes));
    }


};
module.exports = new Store();