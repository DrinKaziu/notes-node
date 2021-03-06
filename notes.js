const fs = require('fs');

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};



let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  };
}

let getNote = (title) => {
  let notes = fetchNotes();
  let notesToRead = notes.filter((note) => note.title === title);
  return notesToRead[0];
}

let getAllNotes = () => {
  return fetchNotes();
}

let removeNote = (title) => {
  let notes = fetchNotes();
  let newNotes = notes.filter((note) => note.title !== title);
  saveNotes(newNotes);

  return notes.length !== newNotes.length;
}

let logNote = (note) => {
  console.log("-------");
  console.log(`Note: ${note.title} - ${note.body}`);
}

module.exports = {
  addNote,
  getNote,
  getAllNotes,
  removeNote,
  logNote
}
