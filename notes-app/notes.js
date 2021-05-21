const chalk = require("chalk");
const fs = require("fs");

const loadNotes = () => {
    try {
        const buffer = fs.readFileSync("notes.json");
        const json = buffer.toString();
        return JSON.parse(json);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", notesJSON);
};

const listNotes = () => {
    console.log(chalk.bold("Notes List"));
    const notes = loadNotes();
    if (!!notes) {
        notes.forEach((note) =>
            console.log(
                '+ ' + chalk.green.inverse(`${note.title}`) + ` - ${note.body}\n`
            )
        );
    } else {
        console.log(chalk.red.inverse("No notes found!"));
    }
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    // with node inspect prefix for the command to run
    debugger

    if (!duplicateNote) {
        notes.push({ title: title, body: body });
        saveNotes(notes);
        console.log(chalk.green.inverse("Note added!"));
    } else {
        console.log(chalk.red.inverse("Note title taken!"));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();

    if (notes.length == 0) {
        console.log("No notes to remove!");
        return;
    }

    const newNotes = notes.filter((note) => note.title !== title);

    if (newNotes.length < notes.length) {
        console.log(chalk.green.inverse("Note removed!"));
        saveNotes(newNotes);
    } else {
        console.log(chalk.red.inverse("Note not found!"));
    }
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (!!note) {
        console.log(
            chalk.green.inverse(`+ ${note.title}`) + ` - ${note.body}\n`
        );
        return note;
    } else {
        console.log(chalk.red.inverse("No note found!"));
    }
};

module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    readNote: readNote,
    removeNote: removeNote
};
