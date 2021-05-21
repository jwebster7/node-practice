const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// add, remove, read, list
yargs.command({
    command: "add",
    describe: "Adds a new note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "note body",
            demandOption: true,
            type: "string"
        }
    },
    handler({ title, body }) {
        notes.addNote(title, body);
    }
});

yargs.command({
    command: "remove",
    describe: "Removes a note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: "string"
        }
    },
    handler({ title }) {
        notes.removeNote(title);
    }
});

yargs.command({
    command: "read",
    describe: "Displays a note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: "string"
        }
    },
    handler({ title }) {
        notes.readNote(title);
    }
});

yargs.command({
    command: "list",
    describe: "Displays a list of all notes",
    handler() {
        notes.listNotes();
    }
});

yargs.parse();
