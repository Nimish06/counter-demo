import React, { useState } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hi, the count%2=0");
  const [evenOdd, setEvenOdd] = useState("Count is even");
  const incrementCount = () => {
    setCount(count + 1);
    checkModularity(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
    checkModularity(count - 1);
  };

  const checkModularity = (x) => {
    if (x % 2 == 1) {
      setMessage("Hi, the count%2=1");
      setEvenOdd("Count is odd");
    } else {
      setMessage("Hi, the count%2=0");
      setEvenOdd("Count is even");
    }
  };
  return (
    <div>
      <div>
        <header>
          <h3 className="headerContainer">{evenOdd}</h3>
          <div className="buttonContainer1">
            <button onClick={incrementCount} className="button">
              +
            </button>
            <p>{count}</p>
            <button onClick={decrementCount} className="button">
              -
            </button>
          </div>
        </header>
      </div>

      <div className="container">
        <div className="buttonContainer2">
          <button onClick={incrementCount} className="button">
            +
          </button>
          <p>{count}</p>
          <button onClick={decrementCount} className="button">
            -
          </button>
        </div>
        <div>
          <h5>{message}</h5>
        </div>
      </div>
    </div>
  );
}

export default Counter;
