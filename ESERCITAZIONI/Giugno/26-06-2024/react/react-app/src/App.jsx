import './App.css'
import { Footer } from './components/Footer/Footer';
import {Header} from "./components/Header/Header";
import { Main } from './components/Main/Main';


function App() {


  return (
    <>
    {/* passo due props */}
    <Header brand = {{name: "Logo"}} className = "header"/>
    <Main />
    <Footer />
      
    </>
  )
}

export default App
