import React from "react";
import "./TodoStyle.css"

function Todo(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.todoList.completed} onChange={() => props.checkBoxChange(props.todoList.id)}/>
            <p>{props.todoList.text}</p>
        </div>
      
    )
}

export default Todo