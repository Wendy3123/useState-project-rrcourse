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
  const myDate = new Date("Aug 17 2023"); //dont worry much of the date part just understand the useState()
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
      <p>
        <span>
          {
            count === 0
              ? "Today is " //starting from the myDate var u give count 0 = myDate
              : count > 0 //else if count is greater than 0 days
              ? `${count} day(s) from today is ` //print the number of the var count along with the future date
              : `${Math.abs(count)} days ago was ` //anything else meaning below count=0 or negative numbers print past dates
            //Math.abs returns absolute value so instead of print -2 days ago it will print 2 days ago
          }
        </span>
        <span>{myDate.toDateString()}</span>
      </p>
    </>
  );
}
