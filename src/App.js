import React, { useEffect, useState} from 'react';
import './App.css';
import ToDoForm from "./components/ToDoForm"
import ToDoList from "./components/ToDoList"
const LOCAL_STORAGE_KEY = "react_todo_list_todos"

function App() {
  const [ todos, setTodos] = useState([]);

  useEffect(() => {

   const storageTodos =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if(storageTodos){
     setTodos(storageTodos)
   }
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
  }, [todos]);



  function addToDo(todo){
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id){
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          return{
              ...todo,
              completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>React ToDo</p>
        <ToDoForm addToDo={addToDo}></ToDoForm>
        <ToDoList todos={todos}
         toggleComplete={toggleComplete}
         removeTodo = {removeTodo}
         ></ToDoList>
      </header>
    </div>
  );
}

export default App;
