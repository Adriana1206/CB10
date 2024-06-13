const titleErrorMessage = document.querySelector(".title-error");
const priceErrorMessage = document.querySelector(".price-error");
const descriptionErrorMessage = document.querySelector(".description-error");
const categoryErrorMessage = document.querySelector(".category-error");
const imagesErrorMessage = document.querySelector(".images-error");

const errorHandler = (err, mainContainerEl) => {
  mainContainerEl.innerHTML = "";
  const errorMessageEl = document.createElement("h2");
  errorMessageEl.textContent = `${err.statusCode} - ${err.error}`;

  titleErrorMessage.innerHTML = ""
  priceErrorMessage.innerHTML = ""
  descriptionErrorMessage.innerHTML = ""
  categoryErrorMessage.innerHTML = ""
  imagesErrorMessage.innerHTML = ""

  
  err.message.forEach((message) => {
    if (message.includes("title")) {
      titleErrorMessage.textContent = message;
      return;
    } 
    
    if (message.includes("price")) {
      priceErrorMessage.textContent = message;
      return;
    } 

    if (message.includes("category")) {
        categoryErrorMessage.textContent = message;
    }
    
    if (message.includes("description")) {
      descriptionErrorMessage.textContent = message;
      return;
    } 
    
    if (message.includes("images")) {
      imagesErrorMessage.textContent = message;
      return;
    }
  });

  

  mainContainerEl.append(errorMessageEl);
  console.error(`${err.statusCode} - ${err.error}`);
};

export default errorHandler;