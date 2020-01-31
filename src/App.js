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
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this)
  }
  
  handleCheckBoxChange = (id) => {
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
    console.log(this.state.todos)
  }

  addTodoItem = (addTodo) => {
    console.log("Inside main parent add todo item function");
    console.log(addTodo)
    console.log(this.state.todos)
    // this.setState((prevState) => {
    //   const newTodoList = prevState.todos.push(addTodo)
    //   return {
    //     todos: newTodoList
    //   }
    // })
    const temp = this.state.todos
    console.log(temp)
  }

  render() {
    const todoArray = this.state.todos.map((item) => {
      return <Todo key={item.id} todoList={item} checkBoxChange={this.handleCheckBoxChange}/>
    })
    
    return (
      <div className="todo-list">
        <Navbar />
        <AddItem addTodoItem={this.addTodoItem}/>
        {todoArray}
      </div>  
    )
  }
}

export default App
