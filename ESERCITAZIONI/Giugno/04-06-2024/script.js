/* Esercizio 1: Ricreare l'orologio proposto a lezione che ad ogni 1000ms stampa a console la data attuale; */

let count = 0;

let id = setInterval(() => {
  console.log(new Date());
  count = count + 1;

  //dopo 5 ripetizioni fermo l'intervallo
  if (count > 5) {
    //ID è univoco e serve a fermare l'intervallo
    clearInterval(id);
  }
}, 1000);

/* Esercizio 2: Stampare a DOM l'orologio creato con il primo esercizio. */
const runInterval = () => {
  const pEle = document.querySelector(".timeDiv p");
  const id = setInterval(() => {
    const date = new Date();
    const options = {
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "Europe/Rome"
    };
    const formattedTime = date.toLocaleTimeString("it-IT", options); // Formatta la data e l'ora
    pEle.textContent = formattedTime;
  }, 1000);

  return id;
};

let idInterval = runInterval();


const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');

startButton.addEventListener('click', () => {
    clearInterval(idInterval);
    idInterval = runInterval();
});

stopButton.addEventListener('click', ()=> {
    clearInterval(idInterval);
    console.log(idInterval);
});