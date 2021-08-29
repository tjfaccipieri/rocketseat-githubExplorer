import { useState } from 'react';
// -todos os useAlgumacoisa são os famosos hooks do react

export function Counter() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment +1
      </button>
    </div>
  );
}
