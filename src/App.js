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

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const myDate = new Date("Aug 17 2023"); //dont worry much of the date part just understand the useState()
  myDate.setDate(myDate.getDate() + count);
  return (
    <>
      <div>
        <div>
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          ></input>
          <span>{step}</span>
        </div>
      </div>
      <div>
        <div>
          <button onClick={() => setCount(count - step)}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
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

      {count !== 0 || step !== 1 ? ( //if the count or step changes from the default value we will be able to see and use the reset button to reset our data
        //else :null which means otherwise if the count/step is not chnaged then users dont see the reset button
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}
