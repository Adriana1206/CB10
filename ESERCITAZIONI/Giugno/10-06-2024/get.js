import { API_KEY } from "./keys.js";





async function fetchMoviesFiltered(title = '' , pageNumber){
    const options = {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
        },
    };

    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}`, options);
    const data = await response.json();

    console.log(data);

    totalPages = data.total_pages;
    // Filtra i film solo se un titolo è stato fornito
    if (title) {
        data.results = data.results.filter(movie => {
            return movie.title.toLowerCase().includes(title.toLowerCase());
        });
    
    // Svuota il contenitore
    container.innerHTML = "";
    // Renderizza i film
    film = createContainer(data.results);
    }
}
