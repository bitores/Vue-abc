export const ADD_NOTE = (state) => {
    const newNote = {
      text: 'New Note',
      favorite: false
    }
    
    state.notes.push(newNote)
    state.activeNote = newNote

    console.log('store mutations...');
}