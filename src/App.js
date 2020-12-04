import './App.css';
import Parent from './Component/Parent'
import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(17)
  return (
    <div>
      <h2>App</h2>
      <Parent num={number} />
      <button onClick={() => setNumber(number + 1)}>Increse Number</button>
    </div>
  );
}

export default App;
