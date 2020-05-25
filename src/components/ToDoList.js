import React from "react";
import ToDo from "./Todo";
import {List} from "@material-ui/core"

function ToDoList({ todos, toggleComplete, removeTodo}){
    return(
        <List>
            {todos.map(todo => (
                <ToDo 
                key={todo.id} 
                todo={todo} 
                toggleComplete={toggleComplete}
                removeTodo ={removeTodo}
                ></ToDo>
            ))}
        </List>
    );
}
export default ToDoList;