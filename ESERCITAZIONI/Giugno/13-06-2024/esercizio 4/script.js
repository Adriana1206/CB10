import errorHandler from "./errorHandler.js";
import { resetErrors } from "./errorHandler.js";

const BASE_URL = "https://api.escuelajs.co/";
const getProductEndpoint = "api/v1/products";


const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');
const mainContainerEl = document.querySelector('.main-container');

let id;

buttonSendEl.addEventListener('click', async e => {
  e.preventDefault();
  const newProduct = {
    title: inputTitleEl.value,
    price: inputPriceEl.value,
    description: inputDescriptionEl.value,
    categoryId: inputCategoryEl.value,
    //separo i link delle immagini divisi dalle virgole e ci costruisco l'array
    images: stringToArray(inputImagesEl.value)
  };
  id = await createProduct(newProduct)
})

//divide le stringhe ogni volta che c'è una virgola per creare gli elementi dell'array images
function stringToArray(str) {
  if (!str) {
    return [];
  }
  return str.split(',').map(value => value.trim());
}



//CREAZIONE DELL'OGGETTO
const createProduct = async (prodotto) => {
  try {
    const response = await fetch(`${BASE_URL}${getProductEndpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(prodotto)
    });

    const newProduct = await response.json();

    if (newProduct.error) {
      if (prodotto.categoryId === 0) {
        newProduct.message.push("category must be a positive number")
      }
      console.log(newProduct.error);
      throw newProduct;
    } else {
      id = newProduct.id
    }

    if (newProduct.categoryId === 0) {
      throw {
        message: ["category must be a positive number"]
      }
    }
    mainContainerEl.innerHTML = "";
    resetErrors();
    return newProduct.id;

  } catch (error) {
    errorHandler(error, mainContainerEl)
  }
};


//metodo per riempire gli elementi della select

const select = document.querySelector("#selectProductId");
const buttonUpdate = document.querySelector(".buttonUpdate");


//funzione per caricare i dati  
async function fetchProducts() {
  try {
    const res = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await res.json();
    fillSelect(data)
  } catch (error) {
    console.log(error);
  }

}

//funzione per creare e riempire le option
function fillSelect(data) {
  data.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.id + " " + product.title;
    select.appendChild(option);
  })
}

//al cambio dell'option prende l'id e fa la chiamata https://api.escuelajs.co/api/v1/products/{id} con getProductById
select.addEventListener('change', async function () {
  const productId = select.value;
  console.log(productId);
  if (productId > 0) {
    const data = await getProductById(productId);
    fillForm(data);
  }
})

//prende il prodotto tramite l'id selezionato
async function getProductById(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const data = await res.json();
  return data;
}

//riempie i campi del form con i dati dell'oggetto selezionato
function fillForm(data) {
  inputTitleEl.value = data.title;
  inputPriceEl.value = data.price;
  inputDescriptionEl.value = data.description;
  inputCategoryEl.value = data.category.id;
  inputImagesEl.value = normalizeImagesInput(data.images);
  console.log(data.images);
  console.log(inputImagesEl.value);
}

/*
  Questa funzione vale per i valori inseriti in precedenza che hanno le parentesi []. 
  Prende images del form, se è una stringa la inserisce nell'array images
  se è una stringa che contiene un'array, per ogni elemento dell'array restituisce
  con  images: [inputImagesEl.value]
  scrive  ["["https://www.example.com/image1.jpg/,https://www.example.com/image2.jpg/"]"]
*/
function normalizeImagesInput(input) {     
  console.log(input)
  function normalizeString(str) {
    console.log(str)
    str = str.trim();//toglie gli spazi
    if (str.startsWith('[') && str.endsWith(']')) {
        try {
            const jsonString = str.replace('/\/g', '');
            const parsedArray = JSON.parse(jsonString);
            console.log(parsedArray)
            if (Array.isArray(parsedArray)) {
              console.log(parsedArray);
                return parsedArray;
            }
        } catch (e) {
            console.error("Errore durante il parsing dell'array JSON:", e);
        }
    }
    return [str];
}
return input.flatMap(item => normalizeString(item));
}



//quando clicco sul pulsante fa update con i valori del form
buttonUpdate.addEventListener('click', async e => {
  e.preventDefault();
  let imagesString = stringToArray(inputImagesEl.value);
  console.log(inputImagesEl.value);
  if (Array.isArray(inputImagesEl.value)) {
      imagesString = inputImagesEl.value;
  }
  console.log(imagesString);
  const updatedProduct = {
    title: inputTitleEl.value,
    price: inputPriceEl.value,
    description: inputDescriptionEl.value,
    categoryId: inputCategoryEl.value,
    images: imagesString
  };

  console.log(updatedProduct);
  id = select.value;
  console.log(id);
  updateProduct(id, updatedProduct);
})

//update del prodotto con la chiamata API
const updateProduct = async (productId, dati) => {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dati)
    });
    console.log(JSON.stringify(dati))
    const updatedProduct = await response.json();
    console.log("Prodotto aggiornato:", updatedProduct);
  } catch (error) {
    console.error("Errore nell'aggiornamento del prodotto:", error);
  }
};



fetchProducts();