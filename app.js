const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const options = {
  title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  },
  body: {
    describe: 'Content of note',
    demand: true,
    alias: 'b'
  }
}

const argv = yargs
  .command('add', 'Add a new note', {title: options.title, body: options.body})
  .command('list', 'List all notes')
  .command('read', 'Read a note', {title: options.title})
  .command('remove', 'Remove a note', {title: options.title})
  .help()
  .argv;
let command = argv._[0];


if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if(note) {
    console.log('Note Created Successfully:');
    notes.logNote(note);
  } else {
    console.log('Note title already exits...');
  }
} else if (command === 'list'){
  let allNotes = notes.getAllNotes();
  if(allNotes) {
    console.log(`Printing ${allNotes.length} note(s):`);
    allNotes.forEach((note) => notes.logNote(note));
  } else {
    console.log('No notes available');
  }
} else if (command === 'read') {
  let note = notes.getNote(argv.title)
  if(note) {
    console.log('Read Below...');
    notes.logNote(note);
  } else {
    console.log('Note Not Found');
  }
} else if (command === 'remove') {
  let removedNote = notes.removeNote(argv.title);
  let message = removedNote ? console.log('Note Removed Successfully') : console.log('No Notes Found');
} else {
  console.log('Command not recognized');
}
