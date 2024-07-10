import { API_KEY } from "./keys.js";

const container = document.querySelector('.movies');
const searchBarEl = document.querySelector(".searchbar");
const popular = document.querySelector("#popular");
const topRated = document.querySelector("#topRated");
let currentPage = 1;
let totalPages = 0;
let film = [];
const BASE_URL = "https://api.themoviedb.org/3/";
const urlPopular= BASE_URL + "movie/popular?language=en-US";
const urlTopRated = BASE_URL + "discover/movie?include_adult=false&include_video=false&language=en-US";
const urlTopRatedParams = "&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200";
let isTopRated = false;

async function fetchMoviesFiltered(title = '', pageNumber, url) {
    const options = {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

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

    } catch (err) {
        console.error("SONO l'ERRORE", err);

        const titleElement = document.createElement("h1");
        titleElement.style.color = "white";
        titleElement.textContent = "Errore nel caricamento dei prodotti";

        container.append(titleElement);
    }
}



// function createContainer(data){
//     data.forEach(movie => {
//         const card = document.createElement('div');
//         const title = document.createElement('h2');
//         const image = document.createElement('img');
//         const divTitle = document.createElement('div');
//         const date = document.createElement('p');
//         const votes = document.createElement('p');
//         const description = document.createElement('p');
//         votes.textContent = `Rating: ${movie.vote_average} (${movie.vote_count} votes)`;
       

//         card.classList.add('card');
//         image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
//         title.textContent = movie.title;
//         date.textContent =`release date: ${movie.release_date }`;
//         divTitle.classList.add('title');
        
//         divTitle.append(title);
//         card.append(image, divTitle);
//         container.append(card);
//     });

//     return data;
// }

//paginazione




function createContainer(data) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('card');
      
      const cardInner = document.createElement('div');
      cardInner.classList.add('card-inner');

      // Fronte della card
      const cardFront = document.createElement('div');
      cardFront.classList.add('card-front');
      const image = document.createElement('img');
      image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      const divTitle = document.createElement('div');
      divTitle.classList.add('title');
      const title = document.createElement('h2');
      title.textContent = movie.title; 
      const votes = document.createElement('p');
      votes.classList.add('votes');
      votes.textContent = `Rating: ${movie.vote_average} (${movie.vote_count} votes)`;
      divTitle.append(title, votes);
      cardFront.append(image, divTitle);

      // Retro della card
      const cardBack = document.createElement('div');
      cardBack.classList.add('card-back');
      const date = document.createElement('p');
      const description = document.createElement('p');
      description.classList.add('description');
      description.textContent = movie.overview;
      cardBack.append(description);

      cardInner.append(cardFront, cardBack);
      card.append(cardInner);
      container.append(card);
    });

    return data;
  }



function addPageListeners(){
    for(let i=1; i<=4; i++){
        document.querySelector(`.pag${i}`).addEventListener("click", 
            function (event) {
                let url;
                if(isTopRated){
                    url = urlTopRated + `&page=${i}` + urlTopRatedParams;
                }else{
                    url= urlPopular + `&page=${i}`;
                }
                fetchMoviesFiltered('', i, url );
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
            let url = '';
            if(isTopRated){
                url = urlTopRated + `&page=${currentPage}` + urlTopRatedParams;
            }else{
                url= urlPopular + `&page=${currentPage}`;
            }

            fetchMoviesFiltered('', currentPage, url);
        }
    );

    document.querySelector(".succ").addEventListener("click", 
        function (event) {
            if(currentPage == totalPages){
                currentPage = totalPages;
            }else{
                currentPage += 1;
            }
            let url = '';
            if(isTopRated){
                url = urlTopRated + `&page=${currentPage}` + urlTopRatedParams;
            }else{
                url= urlPopular + `&page=${currentPage}`;
            }
            fetchMoviesFiltered('', currentPage, url);
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
    container.innerHTML = "";
    createContainer(filteredProducts);
}


//funzione per Popular e Top Rated
popular.addEventListener("click", function(event){
    isTopRated = false;
    fetchMoviesFiltered('', 1, urlPopular);
});

topRated.addEventListener("click", function(event){
    isTopRated = true;
    let url = urlTopRated + '&page=1' + urlTopRatedParams;
    fetchMoviesFiltered('', 1, url);
});



fetchMoviesFiltered('', 1, urlPopular);
addPageListeners();



