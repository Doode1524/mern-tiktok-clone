import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1>Hello</h1>
      <div className="app__videos">
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
