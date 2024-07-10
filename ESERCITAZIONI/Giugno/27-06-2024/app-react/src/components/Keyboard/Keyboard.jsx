/*
    Creiamo un componente Keyboard che avrà al proprio interno i vari bottoni;
    All'interno di Keyboard creiamo i bottoni usando un .map() partendo da un 
    array di valori: ["AC", "+/-", "%", "/", 7, 8, 9, "X", 4,5,6,"-", 1,2,3,"+", "Reset",0,".","="].
*/
import "./Keyboard.css"
import  Button  from "../Button/Button"
const buttonValues = ["AC", "+/-", "%", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", "Reset", 0, ".", "="];

function Keyboard() {
    return (
        <>
            <div className="container">
                {buttonValues.map((value, index) => (
                    <Button key={index-value} value={value} />
                ))}
            </div>
        </>
    );
}


export default Keyboard