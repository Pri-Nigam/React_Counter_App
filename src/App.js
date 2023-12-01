import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './Counter';
import Reset from './Reset';

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('white');

  return (
    <div className={`${color} main`}>
      <h1>{color}</h1>
      <Counter counter={counter} setCounter={setCounter} setColor={setColor} />
      <Reset setCounter={setCounter} setColor={setColor} />
    </div>
  );
}

export default App;
