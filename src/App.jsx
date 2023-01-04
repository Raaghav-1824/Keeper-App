import React, { useState } from "react";
import "./styles.css";
import Header from "./header";
import Note from "./Note";
import CreateArea from "./CreateArea";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNotes) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNotes];
    });
    console.log(newNotes);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((props, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={props.title}
            content={props.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}
