import React from "react";

function Note(props) {
  let handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content || props.message}</p>
      <button onClick={handleClick}>delete</button>
    </div>
  );
}

export default Note;
