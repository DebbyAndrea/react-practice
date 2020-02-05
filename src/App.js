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
    this.setState((prevState) => {
      const newTodoList = prevState.todos.push(addTodo)
      return {
        todos: prevState.todos
      }
    })
  }

  deleteTodo = (id) => {
    console.log("Clicked close button" + id);
    this.setState((prevState) => {
      for (let x in prevState.todos) {
        if (prevState.todos[x].id === id) {
          delete prevState.todos[x];
          break;
        }
      }
      return {
        todos: prevState.todos
      }
    })
  }

  render() {
    const todoArray = this.state.todos.map((item) => {
      return <Todo key={item.id} todoList={item} checkBoxChange={this.handleCheckBoxChange } deleteTodo={this.deleteTodo} />
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
