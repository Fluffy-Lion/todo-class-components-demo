import React from 'react';
import styled from 'styled-components';
import UserInput from './UserInput';

const Button = styled.button `
  border: solid 4px red;
  border-radius: 10px;
`

class App extends React.Component {
  state = {
    todo: [],
    userInput: ""
  }

  addHandler = (event) => {
    event.preventDefault()
    let newTodo = [...this.state.todo]
    newTodo.push(this.state.userInput)
    this.setState({ todo: newTodo })
    this.setState({ userInput: "" })
  }
  
  deleteHandler = (i) => {
    let newTodo = [...this.state.todo]
    newTodo.splice(i, 1)
    this.setState({ todo: newTodo})
  }

  updateInput = (e) => {
    this.setState({ userInput: e.target.value })
  }

  render() {
    console.log(this.state)
    return (
    <div className="App">
      <h1>tasks</h1>
      {this.state.todo.map((item, index) => {
        return (
         
          <div key={index}>
            <h2>{item}</h2>
            <Button onClick={() => this.deleteHandler(index)}>delete</Button>
          </div>
        )
      })}
      <form onSubmit={this.addHandler}>
        <UserInput updateInput={this.updateInput} userInput={this.state.userInput} />
        <button type="submit">add task</button>
      </form>
    </div>
  );
}
}

export default App;
