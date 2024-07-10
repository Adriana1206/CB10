const BASE_URL = "https://api.escuelajs.co/";
const getProductEndpoint = "api/v1/products";

//nuova risorsa
const newProduct = {
    title: "Pippo",
    price: 23,
    description: "string pippo",
    categoryId: 1,
    images: ["https://it.wikifur.com/w/images/thumb/e/e5/Goofy.png/404px-Goofy.png"]
  }

/*
  Invio una richiesta ad un endpoint per creare una nuova risorsa
*/
const POST = async (product) => {
    const res = await fetch(`${BASE_URL}${getProductEndpoint}`, {
    //opzioni della richiesta
      method: "POST",
      headers: {
        //indica che nella richiesta ci sono dati in formato JSON
        "Content-Type": "application/json", 
      },
      //converte l'oggetto da inviare in formato JSON
      body: JSON.stringify(product),
    });
  
    //ritorna l'ID della risorsa creata
    const data = await res.json();
    
    console.log(data.id);
    return data.id;
  };




