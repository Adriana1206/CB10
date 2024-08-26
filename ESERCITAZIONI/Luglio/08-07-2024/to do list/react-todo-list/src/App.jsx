import React, { useState } from 'react';
import styles from './App.module.css';
import todoImage from './assets/cat.gif';
import endTaskImage from './assets/end-task.gif'; 

function App() {
  const initialTodos = [
    {
      id: 1,
      title: 'Studiare React',
    },
    {
      id: 2,
      title: 'Esercizio Frontend Mentor',
    },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);
  const [showEndTask, setShowEndTask] = useState(false); 
  const [showTodoImage, setShowTodoImage] = useState(true); 

  const addTodo = () => {
    if (!input.length) return;

    const newTodo = {
      id: todos.length + 1, 
      title: input,
    };

    setTodos([...todos, newTodo]);
    setInput('');

    
    if (showEndTask) {
      setShowEndTask(false);
      setShowTodoImage(true);
    }
  };

  const handleChange = (e, todoId) => {
    if (e.target.checked) {
      setCompletedTodos([...completedTodos, todoId]);
    } else {
      const updatedCompletedTodos = completedTodos.filter((id) => id !== todoId);
      setCompletedTodos(updatedCompletedTodos);
    }
  };

  const handleDelete = (todoId) => {
    const newList = todos.filter((todo) => todo.id !== todoId);
    setTodos(newList);

    const updatedCompletedTodos = completedTodos.filter((id) => id !== todoId);
    setCompletedTodos(updatedCompletedTodos);

    // Controlla se la lista delle task è vuota
    if (newList.length === 0) {
      setShowEndTask(true); 
      setShowTodoImage(false); 
    }
  };

  return (
    <div className={styles.container}>
      {/* Mostra l'immagine delle attività da completare o la fine delle attività */}
      {showEndTask ? (
        <div className={styles.todoImage}>
          <img src={endTaskImage}  alt="mochi peach cat end task" />
          <h2>Task terminate 🎉🎉🎉</h2>
        </div>
      ) : (
        showTodoImage && (
          <img src={todoImage} alt="mochi peach cat" />
        )
      )}

      <div className={styles.toDo}>
        <input value={input} placeholder="Add Task" onChange={(e) => setInput(e.target.value)} />
        <button className={styles.addButton} onClick={addTodo}>Add</button>
      </div>

      <div className={styles.container__list}>
        <ul>
          {todos.map((todo) => (
            <div className={styles.toDo} key={todo.id}>
              <li style={{ backgroundColor: completedTodos.includes(todo.id) ? 'green' : 'rgba(51, 51, 51, 1)' }}>
                {todo.title}
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={(e) => handleChange(e, todo.id)}
                  checked={completedTodos.includes(todo.id)}
                />
              </li>
              <button className={styles.deleteButton} onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
