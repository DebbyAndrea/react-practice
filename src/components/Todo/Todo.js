import React from "react";
import "./TodoStyle.css"

function Todo(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" onChange={() => props.checkBoxChange(props.todoList.id)}/>
            <p>{props.todoList.text}</p>
            <span className="close" onClick={() => console.log("close button clicked")}>&times;</span>
        </div>
      
    )
}

export default Todo