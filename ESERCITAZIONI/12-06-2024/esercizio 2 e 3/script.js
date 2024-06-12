const BASE_URL = "https://api.escuelajs.co/";
const getProductEndpoint = "api/v1/products";


const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');

buttonSendEl.addEventListener('click', e => {
  e.preventDefault();
  const newProduct = {
      title: inputTitleEl.value,
      price: inputPriceEl.value,
      description: inputDescriptionEl.value,
      categoryId: inputCategoryEl.value,
      images: [inputImagesEl.value]
  };

  POST(newProduct);
})


const deleteById = async (id) => {
  const res = await fetch(`${BASE_URL}${getProductEndpoint}/${id}`, {
      method: "DELETE"
  })

  const data = await res.json()

  console.log(data)
}

deleteById(357);

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




