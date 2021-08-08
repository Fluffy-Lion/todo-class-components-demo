import React from 'react'

const TaskItem = ({ task, deleteHandler, index }) => {
  return (
  <div>
    <h2>your task is....{task}</h2>
    <button onClick={() => deleteHandler(index)}>delete</button>
  </div>  
  )
}

class App extends React.Component {
  state = {
    todos: [],
    userInput: ""
  }


  changeHandler = (event) => {
    this.setState({ userInput: event.target.value })
  }
  
  addHandler = (event) => {
    event.preventDefault()
    let newArr = [...this.state.todos]
    newArr.push(this.state.userInput)
    this.setState({ todos : newArr })
    this.setState({ userInput: "" })
  }

  deleteHandler = (index) => {
    let newArr = [...this.state.todos]
    newArr.splice(index, 1)
    this.setState({ todos : newArr })
  }
  
  render(){
    
    return(
      <div>
        <h1>app</h1>
        <div>
          {this.state.todos.map((todo, index) => {
            return <TaskItem key={index} task={todo} index={index} deleteHandler={this.deleteHandler} />
          })}
        </div>
        <form onSubmit={this.addHandler}>
          <input value={this.state.userInput} onChange={this.changeHandler}/>
          <button type="submit">add task</button>
        </form>
      </div>
    )
  }
}

export default App