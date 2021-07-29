import React from 'react';

class App extends React.Component {
  state = {
    todo: [],
    userInput: ""
  }

  addHandler = () => {
    let newTodo = [...this.state.todo]
    newTodo.push(this.state.userInput)
    this.setState({todo: newTodo})
    this.setState({userInput: ""})
  }


  render() {
    console.log(this.state)
    return (
    <div className="App">
      <h1>tasks</h1>
      {this.state.todo.map((item, index) => {
        return <h2>{item}</h2>
      })}
      <input onChange={(event) => this.setState({userInput: event.target.value})} 
              value={this.state.userInput}
              />
      <p>{this.state.userInput}</p>
      <button onClick={this.addHandler}>add task</button>
    </div>
  );
}
}

const Person = (props) => {
  return (
    <h2>{props.name}</h2>
  )
}

export default App;
