import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Hello React");
  // Your code below

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
