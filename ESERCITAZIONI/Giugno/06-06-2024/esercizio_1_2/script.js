//esercizio 1

// esercitiamoci con fetch , effettuiamo una chiamata a https://fakestoreapi.com/products, 
// sfruttando i .then() stampiamo a console i dati ottenuti comprensibili per js

fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((data) => console.log(data))


//esercizio 2

// proviamo a stampare i dati ottenuti sul DOM, va bene anche una card o un titolo, 
// comunque che sia qualcosa ottenuta dalla risposta della nostra chiamata
const container = document.querySelector(".container");

fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((data) => {

    for(let i=0; i<3; i++){
        const card = document.createElement('div');
        const title = document.createElement('p');
        const image = document.createElement('img');
        card.classList.add('card');
        title.textContent = data[i].title;
        title.classList.add('title');
        title.style.fontSize = "15px";
        image.src = data[i].image;
        image.style.width = "150px";

        card.append(image, title);
        container.append(card);
    }
    
})