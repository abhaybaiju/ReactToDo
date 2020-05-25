import React from "react"

function ToDo({ todo, toggleComplete, removeTodo }){
    
    function handleCheckboxClick(){
        toggleComplete(todo.id);
    }
    function handleRemoveClick(){
        removeTodo(todo.id);
    }
    return(
        <div style={{display: "flex"}}>
        <input type="checkbox" onClick={handleCheckboxClick}></input>
        <li style={{
            color: "white",
            textDecoration: todo.completed ? "line-through" : null
        }}>{todo.task}</li>
        <button  onClick={handleRemoveClick} ></button>
        </div>
    );
}
export default ToDo;