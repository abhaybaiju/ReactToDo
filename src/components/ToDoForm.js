import React, {useState} from "react";
import { Button, TextField } from "@material-ui/core"
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
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField label="Enter task" name="task" type="text" value={todo.task} onChange = {handleTaskInputChange}></TextField>
            <Button type="submit"> Submit </Button>
        </form>
    )
}
export default ToDoForm;