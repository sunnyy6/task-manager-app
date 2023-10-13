import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./data";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => {
        return (
          <Note
            key={noteItem.key}
            title={noteItem.title}
            message={noteItem.message}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;
