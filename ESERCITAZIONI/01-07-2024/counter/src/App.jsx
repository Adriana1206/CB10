import React, { useState, useEffect } from 'react';
import './App.css'; 
import regaloGif from './assets/regalo.gif';
import anotherGif from './assets/gatto.gif'; 

function App() {
  const [count, setCount] = useState(0);
  const [currentGif, setCurrentGif] = useState(regaloGif);
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10) + 1);

  useEffect(() => {
    if (count === randomNumber) {
      setCurrentGif(anotherGif);
    }
  }, [count, randomNumber]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
    setCurrentGif(regaloGif);
    setRandomNumber(Math.floor(Math.random() * 10) + 1); 
  };

  return (
    <>
      <div className="img">
        <img src={currentGif} alt="Gif di un regalo"></img>
      </div>
      <div className="container">
        <h1>Contatore: {count}</h1>
        <h2>Incrementa fino a {randomNumber}</h2>
        <div className="count">
          <button onClick={increment}>Incrementa</button>
          <button disabled={count === 0} onClick={decrement}>Decrementa</button>
        </div>
        <button onClick={reset}>Resetta</button>
      </div>
    </>
  );
}

export default App;
