import styles from './App.module.css';
import patternDivider from './assets/pattern-divider-desktop.svg';
import icon from './assets/icon-dice.svg';
import { useState, useEffect } from 'react';


async function fetchAdvice() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  return data.slip.advice;
}

function App() {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      setLoading(true);
      const newAdvice = await fetchAdvice();
      setAdvice(newAdvice);
    } catch (err) {
      setError('Failed to fetch advice. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <p>ADVICE</p>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <h2>"{advice}"</h2>
        )}
        <div className={styles.divider}>
          <img src={patternDivider} alt="pattern divider" />
        </div>
      </div>
      <div className={styles.icon} onClick={handleClick}>
        <img src={icon} alt="icon" />
      </div>
    </>
  );
}

export default App;
