import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
