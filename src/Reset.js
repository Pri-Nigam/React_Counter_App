import React from 'react';

const Reset = ({ setCounter, setColor }) => {
  const handleCounterReset = () => {
    setColor('white');
    setCounter(0);
  };

  return (
    <div className='child2'>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
};

export default Reset;
