const util = require('util');
const fs = require('fs');
var uniqid = require('uniqid');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {

    readNotes() {
        return readFileAsync('db/db.json', 'utf8');
    };

    writeNotes(data) {
        return writeFileAsync('db/db.json', JSON.stringify(data));
    }

    getNotes() {
        return this.readNotes().then(data => {
            let notes;

            try {
                notes = [].concat(JSON.parse(data))
            } catch(error){
                notes = [];
            };
            return notes
        });
    };

    addNotes(data) {
        const { title, text} = data
        if(!title || !text){
            throw new Error('You must fill in the required information!');
        } 
        const finalNote = {title, text, id:uniqid() }
        return this.getNotes().then(data => [...data, finalNote]).then(data => this.writeNotes(data));
    }


};
module.exports = new Store();