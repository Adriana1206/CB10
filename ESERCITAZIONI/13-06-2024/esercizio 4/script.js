import errorHandler from "./errorHandler.js";

const BASE_URL = "https://api.escuelajs.co/";
const getProductEndpoint = "api/v1/products";


const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');
const mainContainerEl = document.querySelector('.main-container');

const titleErrorMessage = document.querySelector(".title-error");
const priceErrorMessage = document.querySelector(".price-error");
const descriptionErrorMessage = document.querySelector(".description-error");
const categoryErrorMessage = document.querySelector(".category-error");
const imagesErrorMessage = document.querySelector(".images-error");


let id;

buttonSendEl.addEventListener('click', async e => {
  e.preventDefault();
  const newProduct = {
      title: inputTitleEl.value,
      price: inputPriceEl.value,
      description: inputDescriptionEl.value,
      categoryId: inputCategoryEl.value,
      images: [inputImagesEl.value]
  };
  id = await createProduct(newProduct)
})

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


const resetErrors = () => {
  titleErrorMessage.textContent  = '';
  priceErrorMessage.textContent  = '';
  descriptionErrorMessage.textContent = '';
  categoryErrorMessage.textContent  = '';
  imagesErrorMessage.textContent  = '';
}