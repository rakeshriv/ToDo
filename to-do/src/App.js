import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./todosData"
import "./style.css"


class App extends React.Component{
  constructor(){
    super()
    this.state ={
        todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      }
      )
      return {
        todos: updatedTodos
      }
    })
  }

  render(){
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handler={this.handleChange}/>)

    return (
      <div className="todo-list">
          {todoItems}
      </div>
    )
  }
}

export default App;
