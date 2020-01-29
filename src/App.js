import React, {Component} from "react";

import Todo from "./components/Todo/Todo"
import todoData from "./components/Todo/todoData"
import Navbar from "./components/Navbar/Navbar"
import AddItem from "./components/AddItem/AddItem"


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
      goToPlay: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange = (id) => {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((item) => {
        if(item.id === id) {
          item.completed = !item.completed
        }
        return item;
      })
      return {
        todos: updatedTodos
      }
    })
    console.log("Change from the event, " + id);
  }

  render() {
    const todoArray = this.state.todos.map((item) => {
      return <Todo key={item.id} todoList={item} checkBoxChange={this.handleChange}/>
    })
    
    return (
      <div className="todo-list">
        <Navbar />
        <AddItem />
        {todoArray}
      </div>  
    )
  }
}

export default App
