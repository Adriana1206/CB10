//esercizio 3
//stampiamo tutti i prodotti con delle card, sbizzarritevi con lo stile

const container = document.querySelector(".container");

fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((data) => {

    for(let i=0; i<data.length; i++){
        const card = document.createElement('div');
        const description = document.createElement('p');
        const image = document.createElement('img');
        const divDescription = document.createElement('div');
        const price = document.createElement('p');
        const title = document.createElement('h2');

        card.classList.add('card');
        description.classList.add('description');
        divDescription.classList.add('divDescription');
        price.classList.add('price');

        description.textContent = data[i].description;
        image.src = data[i].image;
        price.textContent = `Prezzo: ${data[i].price} €`;
        title.textContent = data[i].title;

        
        divDescription.append(price,description);
        card.append(title, image, divDescription);
        container.append(card);
    }
    
})