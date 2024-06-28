// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './List.css';

function List() {
    /*
       quando renderizzo il componente il valore iniziale fornito a 
       useState viene assegnato alla variabile di stato todos
       solo la prima volta che il componente viene montato nel DOM.
   */
    const [todos, setTodos] = useState([
        'Andare in palestra',
        'Comprare regalo compleanno',
        'Colloquio di lavoro',
        'Leggere un libro',
        'Riunione su meet alle 15:00'
    ]);

    const [inputValue, setInputValue] = useState('');

    
    const handleChange = (event) => {
        setInputValue(event.target.value); // Aggiorna il valore di inputValue quando l'utente digita nell'input
    };

    const addTodo = () => {
        if (inputValue.trim() === '') {
            alert('Il campo non può essere vuoto');
            return;
        }
        setTodos([...todos, inputValue]); // Crea una copia dell'array todos aggiungendo il nuovo elemento
        setInputValue(''); // Resetta l'inputValue 
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos]; // Crea una copia dell'array todos
        newTodos.splice(index, 1); // Rimuove l'elemento 
        setTodos(newTodos); // Aggiorna la lista 
    };

    return (
        <>
            <div className="header">
                <h1 style={{ margin: '5px' }}>To Do List</h1>
                <input
                    type="text"
                    id="myInput"
                    placeholder="Title..."
                    value={inputValue}
                    onChange={handleChange}
                />
                <button className="addBtn" onClick={addTodo}>
                    Add
                </button>
            </div>

            <ul id="myList">
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button className="addBtnX" onClick={() => deleteTodo(index)}>
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default List;
