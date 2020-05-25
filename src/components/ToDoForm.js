import React, {useState} from "react";
import * as uuid from "uuid"

function ToDoForm({ addToDo }){
    const [todo,setToDo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e){
        setToDo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()){
            addToDo({ ...todo, id: uuid.v4()});
            setToDo({ ...todo, task: ""});
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="task" type="text" value={todo.task} onChange = {handleTaskInputChange}></input>
            <button> Submit </button>
        </form>
    )
}
export default ToDoForm;