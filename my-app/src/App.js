import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [showCounter1, setShowCounter1] = useState(true)
  const [counter1InitialValue, setCounterInitialValue] = useState(2)
  return (
    <div>
      <input type="text" onChange={(event) => {
        setCounterInitialValue(parseInt(event.target.value, 10))
      }}
      />
      <button onClick={() => {
        setShowCounter1(!showCounter1)
      }}> {showCounter1 ? "Hide counter 1" : "Show Counter 1"}</button>
      {
        showCounter1 && <Counter initialValue={counter1InitialValue} />
      }
      <Counter initialValue={100} />

    </div>
  );
}



export default App;
