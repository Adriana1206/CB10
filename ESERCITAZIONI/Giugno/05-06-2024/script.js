//ESERCIZIO 1 E 2

const divParent = document.querySelector(".container");
const buttonOneEl = document.querySelector(".button1");
const buttonTwoEl = document.querySelector(".button2");
const buttonThreeEl = document.querySelector(".button3");

// Funzione globale che legge un contesto this generico
function logName() {
    console.log("Element:", this);
}

divParent.addEventListener('click', function(event) {

    //con event.target prendo l'elemento esatto che ha scatenato l'evento
    const eventTarget = event.target;
    
    logName.call(eventTarget);

    if ( eventTarget.tagName === "BUTTON" && eventTarget.className === "button1") {
        console.log("sono button one");
      } 
      else if (eventTarget.tagName === "BUTTON" &&  eventTarget.className === "button2") {
        console.log("sono button two");
    }
    else if (eventTarget.tagName === "BUTTON" &&  eventTarget.className === "button3") {
        console.log("sono button three");
    } 
    else if (eventTarget.tagName === "UL" || eventTarget.tagName === "LI") {
        console.log("sono nella lista")
    } else {
        console.log("sono soltanto il div da fuori");
    }
});


//ESERCIZIO 3 e 4 MODALE e setTimeout
const modalButton = document.querySelector('.modalButton');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');
const yesButton = document.querySelector('.yesButton');
const noButton = document.querySelector('.noButton');

function closeModal() {
    modal.style.display = 'none';
}

modalButton.addEventListener('click', function(event) {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', function(event) {
    closeModal();
});
    
yesButton.addEventListener('click', function() {
    console.log('button YES');
    closeModal();
});

noButton.addEventListener('click', function() {
    console.log('button NO');
    closeModal()
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal()
    }
});

//passo il riferimento alla funzione senza parentesi 
//per evitare che si chiuda subito la modale
setTimeout(closeModal, 5000);