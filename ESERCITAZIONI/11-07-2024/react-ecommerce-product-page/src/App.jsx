import styles from './App.module.css';
import Button from './components/button/Button';
import Counter from './components/counter/Counter';
import IconCart from './components/icons/IconCart';
import ProductLightBox from './components/productLightbox/ProductLightBox';



function App() {
  return(
    <>
      <h1>Hello world</h1>
      <Button text={"Add to cart"}>
        {/* Poiché #000 è una stringa statica, non c'è bisogno di utilizzare le parentesi graffe.  */}
        <IconCart fill="#000"/>
      </Button>
      <Counter/>
      <ProductLightBox/>
    </>
  )
}

export default App
