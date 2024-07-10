import Keyboard from "./components/Keyboard/Keyboard"
import Display from "./components/Display/Display"
import './App.css'

function App() {
  

  return (
    <>
      <h1>Calculator</h1>
      <div className="calculator">
        <Display/>
        <Keyboard/>
      </div>
    </>
      
  )
}

export default App
