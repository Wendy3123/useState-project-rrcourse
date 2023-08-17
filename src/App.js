import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const myDate = new Date("August 17 2023"); //dont worry much of the date part just understand the useState()
  myDate.setDate(myDate.getDate() + count);
  return (
    <>
      <div>
        <div>
          <button onClick={() => setStep(step - 1)}>-</button>
          <span>Step: {step}</span>
          <button onClick={() => setStep(step + 1)}>+</button>
        </div>
      </div>
      <div>
        <div>
          <button onClick={() => setCount(count - step)}>-</button>
          <span>Count: {count}</span>
          <button onClick={() => setCount(count + step)}>+</button>
        </div>
      </div>
      <p>{myDate.toDateString()}</p>
    </>
  );
}
