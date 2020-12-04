import './App.css';
import { useState } from 'react'
import Parent from './Component/Parent'
import ValueContext from './Component/ValueContext'

function App() {
  console.log('App is rendering');
  const [number, setNumber] = useState(17)
  return (
    <ValueContext.Provider value={number}>
      <div>
        <h2>App</h2>
        <Parent />
        <button onClick={() => setNumber(number + 1)}>Increse Number</button>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
