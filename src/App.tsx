import React from "react";

import "./App.css";
import StickyNotes from "./components/StickyNotes";

function App() {
  return (
    <div className="App w-[100%] h-[100vh] bg-gradient-to-r from-rose-400 to-orange-300">
      <StickyNotes />
    </div>
  );
}

export default App;
