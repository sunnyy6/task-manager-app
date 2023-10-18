import React from "react";
import { createRoot } from "react-dom/client";
import App from "../src/components/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

const citrus = ["lime", "lemon", "orange"];
const fruits = ["Apple", "Banana", "Coconut", "mango", ...citrus];
const fullName = {
  fName: "James",
  lName: "Bond",
};

const user = {
  id: 1,
  email: "jamesbond007@gmail.com",
  ...fullName,
  age: 27,
};
console.log(fruits);
console.log(user);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
