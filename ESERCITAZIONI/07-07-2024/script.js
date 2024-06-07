import { API_KEY } from "./keys.js";

const container = document.querySelector('.movies');
const searchBarEl = document.querySelector(".searchbar");




//Object options richiesto dall'API Moviedb affinchè la nostra chiamata sia autorizzata.
const options = {
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
    },
};

let film = [];

function fetchMoviesFiltered(title = '') {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then((res) => res.json())
        .then((data) => {
            // Filtra i film solo se un titolo è stato fornito
            if (title) {
                data.results = data.results.filter(movie => {
                    return movie.title.toLowerCase().includes(title.toLowerCase());
                });
            }

            // Svuota il contenitore
            container.innerHTML = "";

            // Renderizza i film
            film = createContainer(data.results);

        })
        .catch((err) => {
            console.error("SONO l'ERRORE", err);

            const title = document.createElement("h1");
            title.style.color = "white";
            title.textContent = "Errore nel caricamento dei prodotti";

            container.append(title);
        });
}


function createContainer(data){
    data.forEach(movie => {
        const card = document.createElement('div');
        const title = document.createElement('h2');
        const image = document.createElement('img');

        card.classList.add('card');
        image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        title.textContent = movie.title;

        card.append(title, image);
        container.append(card);
    });

    return data;
}


//Funzione di ricerca film
searchBarEl.addEventListener("input", function (event) {
    const searchText = event.target.value.toLowerCase();
    filterTitle(searchText);
});

function filterTitle(title) {
    const filteredProducts = film.filter((product) => {
        return product.title.toLowerCase().includes(title);
    });
    console.log(filteredProducts);
    container.innerHTML = "";
    createContainer(filteredProducts);
}




fetchMoviesFiltered();

