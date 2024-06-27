// Creiamo un componente Button da poter riusare per tutti i bottoni;
import "./Button.css";


function Button(props){
    const {value} = props;
    return(<button className="button">{value}</button>);
}


export default Button