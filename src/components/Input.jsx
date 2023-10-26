import React, { useState } from "react";

let Input = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  let handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  let updateNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };
  return (
    <div className="note">
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note ..."
          rows="3"
        />
        <button onClick={updateNote}>
         ADD
        </button>
      </form>
    </div>
  );
};

export default Input;
