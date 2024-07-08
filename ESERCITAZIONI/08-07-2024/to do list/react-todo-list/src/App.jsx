import { useState } from 'react'
import styles from './App.module.css'
import todoImage from './assets/toDo.png';

function App() {
  const initialTodos = [{
    id: self.crypto.randomUUID(),
    title: 'Studiare React',
  },
  {
    id: self.crypto.randomUUID(),
    title: 'Esercizio Frontend Mentor',
  },
  ]
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState("");

  const addTodo = () => {
    //se input è vuoto non eseguo nessuna operazione
    if (!input.length) return;

    setTodos(
      //self.crypto.randomUUID() li genera solo lato browser
      [...todos, { id: self.crypto.randomUUID(), title: input }]
    );
    setInput("");
    // console.log("dopo:" , todos);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleDelete = (e) => {
    const newList = todos.filter(todo => todo.id !== e.target.id)
    setTodos(newList);
  }

  return (
    <>
      <div className={styles.container}>
        <img src={todoImage} alt="mochi peach cat" />
        <div className={styles.toDo}>
          <input value={input} placeholder='add Task' onChange={handleChange} />
          <button className={styles.addButton} onClick={addTodo}>Add</button>
        </div>

        <div className={styles.container__list}>
          <h2>List di Todo</h2>
          <ul>
            {todos.map((todo) => {
              return (
                <>
                  <div className={styles.toDo}>
                    <li key={todo.id}>{todo.title}</li>
                    <button id={todo.id} onClick={handleDelete}>Delete</button>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App
