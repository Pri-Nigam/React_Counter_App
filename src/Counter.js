import React from 'react';

const Counter = ({ counter, setCounter, setColor }) => {

  const handleCounterPlus = () => {
    if (counter <= 1) {
      setColor('white');
    } else if (counter >= 2 && counter <= 5) {
      setColor('blue');
    } else if (counter >= 6 && counter <= 10) {
      setColor('green');
    }
    setCounter(counter + 1);
  };

  const handleCounterMinus = () => {
    if (counter <= 1) {
      setColor('white');
    } else if (counter >= 2 && counter <= 5) {
      setColor('blue');
    } else if (counter >= 6 && counter <= 10) {
      setColor('green');
    }
    setCounter(counter - 1);
  };

  const setBackgroundColor = () => {
    if (counter >=6 && counter <=10)
      setColor('green')
    else if (counter >=2 && counter <=5)
      setColor('blue')
    else
      setColor('white')
  }

  return (
    <div className='child1'>
      <button 
        onClick={() => {
          setCounter(counter+1)
          setBackgroundColor()
        }} 
        disabled={counter == 10}
      >
        +
      </button>
      <br/>
      <p>{counter}</p><br/>
      <button onClick={() => setCounter(counter-1)} disabled= {counter == 0}>-</button>
    </div>
  );
};

export default Counter;
