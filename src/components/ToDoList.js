import React from "react";
import ToDo from "./Todo";

function ToDoList({ todos, toggleComplete, removeTodo}){
    return(
        <ul>
            {todos.map(todo => (
                <ToDo 
                key={todo.id} 
                todo={todo} 
                toggleComplete={toggleComplete}
                removeTodo ={removeTodo}
                ></ToDo>
            ))}
        </ul>
    );
}
export default ToDoList;