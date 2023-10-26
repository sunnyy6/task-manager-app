import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Input from "./Input";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <AccessAlarm/><ThreeDRotation/>
      <Input onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            onDelete={deleteNote}
            content={noteItem.content}
          />
        );
      })}
      {/* {values.map((noteItem, index) => {
        return (
          <Note id={noteItem.key} title={noteItem.title}
          content={noteItem.message}
          onDelete={deleteNote}/>
        )
      })} */}
      <Footer />
    </div>
  );
}
export default App;
