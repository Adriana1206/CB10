import { API_KEY } from "./keys.js";

const container = document.querySelector('.movies');
const searchBarEl = document.querySelector(".searchbar");

let currentPage = 1;
let totalPages = 0;


//Object options richiesto dall'API Moviedb affinchè la nostra chiamata sia autorizzata.
const options = {
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
    },
};

let film = [];

function fetchMoviesFiltered(title = '' , pageNumber) {
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}`, options)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            totalPages = data.total_pages;
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

//paginazione
function addPageListeners(){
    for(let i=1; i<=4; i++){
        document.querySelector(`.pag${i}`).addEventListener("click", 
            function (event) {
                fetchMoviesFiltered('', i);
                currentPage = i;
            }
        );
    }

    document.querySelector(".prec").addEventListener("click", 
        function (event) {
            if(currentPage == 1){
                currentPage = 1;
            }else{
                currentPage -= 1;
            }
            fetchMoviesFiltered('', currentPage);
        }
    );

    document.querySelector(".succ").addEventListener("click", 
        function (event) {
            if(currentPage == totalPages){
                currentPage = totalPages;
            }else{
                currentPage += 1;
            }
            fetchMoviesFiltered('', currentPage);
        }
    );
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




fetchMoviesFiltered('', 1);
addPageListeners();



