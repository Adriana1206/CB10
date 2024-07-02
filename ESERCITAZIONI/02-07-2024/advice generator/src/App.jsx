import styles from './App.module.css';
import patternDivider from './assets/pattern-divider-desktop.svg';
import icon from './assets/icon-dice.svg';
import { useState } from 'react';

const advice = [
  "Once you find a really good friend don't do anything that could mess up your friendship", 
  "If you are feeling down, try holding a pencil between your top lip and your nose for five minutes",
  "Don't always rely on your comforts",
  "Drink a glass of water before meals",
  "Everything matters, but nothing matters that much"
];


function getRandomAdvice(){
  return  Math.floor(Math.random() * advice.length);
}

function App() {

  const [randomAdvice, setRandomAdvice] = useState(getRandomAdvice);

  const handleClick = () => {
    setRandomAdvice(getRandomAdvice());
  }
  return(
    <>
    <div className={styles.container}>
      <p>ADVICE #{randomAdvice+1}</p>
      <h2>"{advice[randomAdvice]}"</h2>
      <dov className={styles.divider}>
        <img src={patternDivider} alt="pattern divider" />
      </dov>
    </div>
    <div className={styles.icon} onClick={handleClick}>
      <img src={icon} alt="icon" />
    </div>
  </>
  )
}

export default App
