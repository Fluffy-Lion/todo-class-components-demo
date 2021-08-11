import React from 'react'
import styled from 'styled-components'
import TaskItem from './components/TaskItem'
const PageWrap = styled.div `
  border: solid green 4px;
`


class App extends React.Component {
  state = {
    todos: ['this is a test'],
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
      <PageWrap>
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
      </PageWrap>
    )
  }
}

export default App