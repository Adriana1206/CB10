const BASE_URL = "https://api.escuelajs.co/";
const getProductEndpoint = "api/v1/products";
let id;

const updatedPut = {
    title: "Adriana Update",
    price: 302,
    description: "Rocky balboa",
    categoryId: 2,
    images: ["https://upload.wikimedia.org/wikipedia/en/1/18/Rocky_poster.jpg"]
};

const updatedPatch = {
    title: "Adriana Update",
    price: 150
};
//CREAZIONE DELL'OGGETTO
const createProduct = async () => {
    const productData = {
    title: "Adriana insert",
    price: 23,
    description: "string pippo",
    categoryId: 1,
    images: ["https://it.wikifur.com/w/images/thumb/e/e5/Goofy.png/404px-Goofy.png"]
    };

    try {
        const response = await fetch(`${BASE_URL}${getProductEndpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        });

        const newProduct = await response.json();
        console.log("Prodotto creato:", newProduct);
        id = newProduct.id
        return id;
    } catch (error) {
        console.error("Errore nella creazione del prodotto:", error);
    }
};

//MODIFICA CON PUT E PATCH
const updateProduct = async (productId,metodo, dati) => {
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dati)
        });

        const updatedProduct = await response.json();
        console.log("Prodotto aggiornato:", updatedProduct);
    } catch (error) {
        console.error("Errore nell'aggiornamento del prodotto:", error);
    }
};

// Metodo per verificare l'esistenza del prodotto
const getProductById = async (productId) => {
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
        const product = await response.json();
        console.log("Prodotto recuperato:", product);
    } catch (error) {
        console.error("Errore nel recupero del prodotto:", error);
    }
};

//Metodo per cancellare il prodotto
const deleteProduct = async (productId) => {
    try {
        await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
            method: "DELETE"
        });
        console.log("Prodotto cancellato");
    } catch (error) {
        console.error("Errore nella cancellazione del prodotto:", error);
    }
};



//dopo la creazione del prodotto faccio l'update con l'id
createProduct().then(()=> {
    updateProduct(id,"PUT",updatedPut).then(() =>  {
         getProductById(id).then(()=> deleteProduct(id))
    })
   
});
// In caso di patch sarebbe dovuto essere cosi:
// createProduct().then(()=>updateProduct(id,"PATCH",updatedPatch));
